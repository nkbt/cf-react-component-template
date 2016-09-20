import {fromUrl as gitInfo} from 'hosted-git-info';
import parseAuthor from './parseAuthor';


export default (properties, packageData) => {
  Object.assign(properties['package.name'], {default: packageData.name});
  Object.assign(properties['package.description'], {default: packageData.description});

  if (packageData.config && packageData.config.component) {
    Object.assign(properties['package.global'], {default: packageData.config.component});
  }

  if (packageData.author) {
    const user = parseAuthor(packageData.author);
    Object.assign(properties['user.name'], {default: user.name});
    Object.assign(properties['user.email'], {default: user.email});
  }

  if (packageData.repository && packageData.repository.url) {
    const github = gitInfo(packageData.repository.url).user;
    Object.assign(properties['user.github'], {default: github});
  }
};
