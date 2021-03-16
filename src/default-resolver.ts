export const defaultErrors = [{message: 'an unknown error has occurred.'}];

export default function defaultResolver(path: string) {
  const keys = path.split('.');

  return function({model, errors}) {
    return new Promise((resolve, reject) => {
      try {
        const result = keys.reduce((ref: { [x: string]: any; }, key: string | number) => {
          return ref[key];
        }, model);

        resolve(result);
      } catch (_) {
        if (errors) {
          reject(errors);
        } else {
          reject(defaultErrors);
        }
      }
    });
  };
}
