//cuando pongo un middleware, si o sí, tengo que poner el next para mandar la acicón al reducer

export const logger = store => next => action => {
    console.log(action)
    next(action)
}