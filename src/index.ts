import { extend } from "./services";
import { instance } from "./instance";
import { Options, Instance } from "./types";

const configure = (options: Options): Instance => {
  const { plugins = [] } = options;
  extend(plugins, options, instance);

  return instance;
};

export { configure };
export default instance;
