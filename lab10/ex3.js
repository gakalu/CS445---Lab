class Info {
    logging(msg) {
        console.info(msg);
    }
}
class Warn {
    logging(msg) {
        console.warn(msg);
    }
}
class Error {
    logging(msg) {
        console.error(msg);
    }
}
class Table {
    logging(msg) {
        console.table(msg);
    }
}
class Strategy {
    loggingMethod = "";

    setStrategy(loggingMethod) {
        this.loggingMethod = loggingMethod;
    }

    logging(msg) {
        this.loggingMethod.logging(msg);
    }
};

