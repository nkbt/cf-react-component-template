const date = new Date();
const [major, minor, patch] = process.versions.node.split('.');
export const defaults = {
  date: {
    day: date.getDate(),
    month: date.getMonth(),
    fullYear: date.getFullYear()
  },
  node: {major, minor, patch},
  user: {
    name: '',
    github: '',
    email: ''
  },
  package: {
    name: '',
    description: ''
  },
  curly: {
    left: '{',
    right: '}'
  }
};


export const properties = {
  'user.name': {
    description: 'Your name: ',
    message: 'Required',
    required: true
  },
  'user.email': {
    description: 'Your email (will be publicly available, optional): ',
    pattern: /@/,
    message: 'Should be a valid e-mail'
  },
  'user.github': {
    description: 'Your GitHub public username: ',
    pattern: /^[a-z0-9]+[a-z0-9\-]+[a-z0-9]+$/i,
    message: 'Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen',
    required: true
  },
  'package.name': {
    description: 'Package name: ',
    pattern: /^[a-z0-9]+[a-z0-9\-_]+$/,
    message: 'Package name may only contain alphanumeric characters, hyphens or underscores',
    required: true
  },
  'package.description': {
    description: 'Package description: '
  }
};
