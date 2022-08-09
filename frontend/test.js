const promiseState = async state =>
    new Promise(resolve => this.setState(state, resolve));

promiseState({...})
    .then(() => promiseState({...})
    .then(() => {
        ...  // other code
        return promiseState({...});
    })
    .then(() => {...});