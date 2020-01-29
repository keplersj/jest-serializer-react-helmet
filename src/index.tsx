import * as React from "react";
import { Helmet } from "react-helmet";

Helmet.canUseDOM = false;

const cache = new WeakSet();

const ReactHelmetSerializer: jest.SnapshotSerializerPlugin = {
  test(value) {
    return Boolean(
      // Does the value exist?
      value &&
        // Have we serialized it?
        !cache.has(value) &&
        // Is it a React component?
        value.$$typeof === Symbol.for("react.test.json") &&
        // Does it have Helmet data?
        Helmet.peek() &&
        // Have we serialized the Helmet data?
        !cache.has(Helmet.peek())
    );
  },

  print(value, serialize) {
    // Get head data from Helmet
    const helmet = Helmet.peek();

    // Add component and helmet data to cache so we don't serialize it multiple times
    cache.add(value);
    cache.add(helmet);

    // Recreate head from Helmet data
    const head = serialize(
      <head>
        {/* {serialize(helmet)} */}
        {helmet.base.toComponent()}
        {helmet.bodyAttributes.toComponent()}
        {helmet.htmlAttributes.toComponent()}
        {helmet.link.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.noscript.toComponent()}
        {helmet.script.toComponent()}
        {helmet.style.toComponent()}
        {helmet.title.toComponent()}
      </head>
    );

    // Serialize the component like we were never here
    const body = serialize(value);

    // Prepend our recreated head to the serialized body
    return head + "\n\n" + body;
  }
};

export = ReactHelmetSerializer;
