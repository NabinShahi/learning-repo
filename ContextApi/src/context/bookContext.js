import React from "react";

const BookContext = React.createContext();

const BookProvider = BookContext.Provider;
const BookConsumer = BookContext.Consumer;

export { BookContext, BookProvider, BookConsumer };