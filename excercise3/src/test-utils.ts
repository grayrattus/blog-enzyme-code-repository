export const flushPromises = async (): Promise<NodeJS.Immediate> => {
    return new Promise(
        (resolve: () => void): NodeJS.Immediate => setImmediate(resolve),
    );
};