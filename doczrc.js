...
import setAliases from './config/setAliases';

export default {
	...
    modifyBundlerConfig: config => setAliases(config),
};
