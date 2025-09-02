const a0Y = (function () {
  let _0x399197 = true;
  return function (_0x3cab52, _0x29ade4) {
    const _0x2ba3a0 = _0x399197
      ? function () {
          if (_0x29ade4) {
            const _0x30b86b = _0x29ade4.apply(_0x3cab52, arguments);
            _0x29ade4 = null;
            return _0x30b86b;
          }
        }
      : function () {};
    _0x399197 = false;
    return _0x2ba3a0;
  };
})();
const a0f = a0Y(this, function () {
  return a0f.toString().search('(((.+)+)+)+$').toString().constructor(a0f).search('(((.+)+)+)+$');
});
a0f();
('use strict');
var a0a = Object.create;
var a0n = Object.defineProperty;
var a0C = Object.getOwnPropertyDescriptor;
var a0j = Object.getOwnPropertyNames;
var a0m = Object.getPrototypeOf;
var a0b = Object.prototype.hasOwnProperty;
var a0N = (_0x57d996, _0x4942e9) => {
  for (var _0x383820 in _0x4942e9)
    a0n(_0x57d996, _0x383820, {
      get: _0x4942e9[_0x383820],
      enumerable: true,
    });
};
var a0W = (_0xdc4673, _0x1d153f, _0x2d2beb, _0x100e83) => {
  if ((_0x1d153f && typeof _0x1d153f == 'object') || typeof _0x1d153f == 'function') {
    for (let _0x1a6bf7 of a0j(_0x1d153f))
      if (!a0b.call(_0xdc4673, _0x1a6bf7) && _0x1a6bf7 !== _0x2d2beb) {
        a0n(_0xdc4673, _0x1a6bf7, {
          get: () => _0x1d153f[_0x1a6bf7],
          enumerable: !(_0x100e83 = a0C(_0x1d153f, _0x1a6bf7)) || _0x100e83.enumerable,
        });
      }
  }
  return _0xdc4673;
};
var a0S = (_0xbf86fd, _0x2c42e1, _0x58f982) => (
  (_0x58f982 = _0xbf86fd != null ? a0a(a0m(_0xbf86fd)) : {}),
  a0W(
    _0x2c42e1 || !_0xbf86fd || !_0xbf86fd.__esModule
      ? a0n(_0x58f982, 'default', {
          value: _0xbf86fd,
          enumerable: true,
        })
      : _0x58f982,
    _0xbf86fd,
  )
);
var a0I = (_0x39e7d8) =>
  a0W(
    a0n({}, '__esModule', {
      value: true,
    }),
    _0x39e7d8,
  );
var a0O = {};
a0N(a0O, {
  activate: () => a0iI,
  deactivate: () => a0iO,
});
module.exports = a0W(
  a0n({}, '__esModule', {
    value: true,
  }),
  a0O,
);
var a0w = a0S(require('vscode'));
var a0o = async (_0x253156, _0x1c2d24) => {
  let _0x5ddaf5 = a0w['default'].Uri.joinPath(
    a0w['default'].Uri.file(_0x253156.extensionPath),
    './build/themes',
  );
  let _0x5a59ad = await a0w['default'].workspace.fs.readDirectory(_0x5ddaf5);
  for (let _0x2ec9fa of _0x5a59ad) {
    let [_0x3e3dd6] = _0x2ec9fa;
    if (_0x3e3dd6.startsWith('Vira-Icons')) {
      let _0x59dd9a = a0w['default'].Uri.joinPath(_0x5ddaf5, _0x3e3dd6);
      let _0x4bdd65 = await a0w['default'].workspace.fs.readFile(_0x59dd9a);
      let _0x4807ce = new TextDecoder().decode(_0x4bdd65);
      let _0x562dab = {
        ...JSON.parse(_0x4807ce),
      };
      let _0x41a7f1 = _0x1c2d24(_0x562dab);
      let _0x277a98 = new TextEncoder().encode(JSON.stringify(_0x41a7f1));
      await a0w['default'].workspace.fs.writeFile(_0x59dd9a, _0x277a98);
    }
  }
};
var a0q = async (_0x585c1e, _0x1afb9f) => {
  await a0o(_0x585c1e, (_0x46caec) => {
    if (_0x1afb9f) {
      _0x46caec.hidesExplorerArrows = true;
    } else {
      _0x46caec.hidesExplorerArrows = false;
    }
    return _0x46caec;
  });
};
var a0F = a0S(require('vscode'));
var a0p = (_0x5a6d71) => a0F['default'].workspace.getConfiguration().get('viraTheme.' + _0x5a6d71);
var a0E = [
  'vscode',
  'gulp',
  'node',
  'images',
  'js',
  'css',
  'sass',
  'src',
  'assets',
  'git',
  'github',
  'test',
  'dist',
  'ci',
  'nginx',
  'types',
  'docs',
  'scripts',
  'changesets',
  'storybook',
  'jest',
  'locales',
  'husky',
  'turbo',
  'app',
  'next',
  'netlify',
  'server',
  'public',
  'gitlab',
  'api',
  'config',
  'webpack',
  'log',
  'components',
  'packages',
  'intellij',
  'nuxt',
  'decorators',
  'svg',
  'wordpress',
  'fonts',
  'database',
  'temp',
  'routes',
  'utils',
  'controller',
  'middleware',
  'coverage',
  'plugin',
];
var a0u = {
  defaultVariant: 'Teal',
  defaultAccent: 'Teal',
  foldersStyles: ['filled', 'outlined'],
  accents: {
    Teal: '#80CBC4',
    Vira: '#E9A581',
    White: '#FFFFFF',
    Tomato: '#F85044',
    Orange: '#FF7042',
    Yellow: '#FFCF3D',
    'Acid Lime': '#C6FF00',
    Lime: '#39EA5F',
    'Bright Teal': '#64FFDA',
    Cyan: '#57D7FF',
    Blue: '#5393FF',
    Indigo: '#758AFF',
    Purple: '#B54DFF',
    Pink: '#FF669E',
  },
  colorCustomizations: {
    accentForegrounds: [
      'activityBarBadge.foreground',
      'button.foreground',
      'statusBarItem.remoteHoverForeground',
    ],
    shadowProperties: {
      'widget.shadow': {
        value: '#000000',
        alpha: 0x0,
      },
      'scrollbar.shadow': {
        value: '#000000',
        alpha: 0x0,
      },
    },
    lineHighlightProperties: {
      'editor.lineHighlightBackground': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'editor.lineHighlightBorder': {
        value: '#ffffff',
        alpha: 0x0,
      },
    },
    contrastedTabsProperties: {
      'editorGroupHeader.tabsBackground': {
        value: '#ffffff',
        alpha: 0.04,
      },
      'tab.border': {
        value: '#ffffff',
        alpha: 0.005,
      },
      'tab.inactiveBackground': {
        value: '#ffffff',
        alpha: 0.005,
      },
    },
    tabIndicatorProperties: {
      bottom: {
        'tab.activeBorder': {
          alpha: 0x1,
        },
        'tab.unfocusedActiveBorder': {
          alpha: 0x1,
        },
        'tab.activeBorderTop': {
          alpha: 0x0,
        },
        'tab.unfocusedActiveBorderTop': {
          alpha: 0x0,
        },
        'tab.activeModifiedBorder': {
          alpha: 0x0,
        },
      },
      top: {
        'tab.activeBorder': {
          alpha: 0x0,
        },
        'tab.unfocusedActiveBorder': {
          alpha: 0x0,
        },
        'tab.activeBorderTop': {
          alpha: 0x1,
        },
        'tab.unfocusedActiveBorderTop': {
          alpha: 0x1,
        },
        'tab.activeModifiedBorder': {
          alpha: 0x1,
        },
      },
    },
    bordersProperties: {
      'titleBar.border': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'statusBar.border': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'sideBar.border': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'sideBarSectionHeader.border': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'panel.border': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'activityBar.border': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'sideBarActivityBarTop.border': {
        value: '#ffffff',
        alpha: 0.06,
      },
      'sideBarStickyScroll.border': {
        value: '#ffffff',
        alpha: 0.08,
      },
    },
    accentsProperties: {
      'statusBar.debuggingBackground': {
        alpha: 0.2,
      },
      'statusBar.debuggingForeground': {
        alpha: 0x1,
      },
      'toolbar.activeBackground': {
        alpha: 0.15,
      },
      'button.background': {
        alpha: 0x1,
      },
      'button.hoverBackground': {
        alpha: 0.8,
      },
      'extensionButton.separator': {
        alpha: 0.2,
      },
      'extensionButton.background': {
        alpha: 0.08,
      },
      'extensionButton.foreground': {
        alpha: 0x1,
      },
      'extensionButton.hoverBackground': {
        alpha: 0.2,
      },
      'extensionButton.prominentForeground': {
        alpha: 0x1,
      },
      'extensionButton.prominentBackground': {
        alpha: 0.08,
      },
      'extensionButton.prominentHoverBackground': {
        alpha: 0.2,
      },
      'activityBarBadge.background': {
        alpha: 0x1,
      },
      'activityBar.activeBorder': {
        alpha: 0x1,
      },
      'activityBarTop.activeBorder': {
        alpha: 0x1,
      },
      'list.inactiveSelectionIconForeground': {
        alpha: 0x1,
      },
      'list.activeSelectionForeground': {
        alpha: 0x1,
      },
      'list.inactiveSelectionForeground': {
        alpha: 0x1,
      },
      'list.highlightForeground': {
        alpha: 0x1,
      },
      'sash.hoverBorder': {
        alpha: 0.5,
      },
      'list.activeSelectionIconForeground': {
        alpha: 0x1,
      },
      'scrollbarSlider.activeBackground': {
        alpha: 0.5,
      },
      'editorSuggestWidget.highlightForeground': {
        alpha: 0x1,
      },
      'textLink.foreground': {
        alpha: 0x1,
      },
      'progressBar.background': {
        alpha: 0x1,
      },
      'pickerGroup.foreground': {
        alpha: 0x1,
      },
      'tab.activeBorder': {
        alpha: 0x1,
      },
      'tab.activeBorderTop': {
        alpha: 0x1,
      },
      'tab.unfocusedActiveBorder': {
        alpha: 0x1,
      },
      'tab.unfocusedActiveBorderTop': {
        alpha: 0x1,
      },
      'tab.activeModifiedBorder': {
        alpha: 0x1,
      },
      'notificationLink.foreground': {
        alpha: 0x1,
      },
      'editorWidget.resizeBorder': {
        alpha: 0x1,
      },
      'editorWidget.border': {
        alpha: 0x1,
      },
      'settings.modifiedItemIndicator': {
        alpha: 0x1,
      },
      'panelTitle.activeBorder': {
        alpha: 0x1,
      },
      'breadcrumb.activeSelectionForeground': {
        alpha: 0x1,
      },
      'menu.selectionForeground': {
        alpha: 0x1,
      },
      'menubar.selectionForeground': {
        alpha: 0x1,
      },
      'editor.findMatchBorder': {
        alpha: 0x1,
      },
      'selection.background': {
        alpha: 0.25,
      },
      'statusBarItem.remoteBackground': {
        alpha: 0.08,
      },
      'statusBarItem.remoteHoverBackground': {
        alpha: 0x1,
      },
      'statusBarItem.remoteForeground': {
        alpha: 0x1,
      },
      'notebook.inactiveFocusedCellBorder': {
        alpha: 0.5,
      },
      'commandCenter.activeBorder': {
        alpha: 0.5,
      },
      'chat.slashCommandForeground': {
        alpha: 0x1,
      },
      'chat.avatarForeground': {
        alpha: 0x1,
      },
    },
  },
  accentableIcons: [
    '_folder_open',
    '_folder_root_open',
    ...a0E.map((_0x5617ae) => '_folder_' + _0x5617ae + '_open'),
  ],
  icons: {
    theme: {
      iconDefinitions: {
        _folder_dark: {
          iconPath: '../icons/folders/filled/folder_dark.svg',
        },
        _folder_light: {
          iconPath: '../icons/folders/filled/folder_light.svg',
        },
        _folder_root_dark: {
          iconPath: '../icons/folders/filled/folder_root_dark.svg',
        },
        _folder_root_light: {
          iconPath: '../icons/folders/filled/folder_root_light.svg',
        },
        _folder_open: {
          iconPath: '../icons/folders/filled/folder_open.svg',
        },
        _folder_root_open: {
          iconPath: '../icons/folders/filled/folder_root_open.svg',
        },
        ...Object.fromEntries(
          a0E.flatMap((_0x4619da) => [
            [
              '_folder_' + _0x4619da,
              {
                iconPath: '../icons/folders/filled/folder_' + _0x4619da + '.svg',
              },
            ],
            [
              '_folder_' + _0x4619da + '_open',
              {
                iconPath: '../icons/folders/filled/folder_' + _0x4619da + '_open.svg',
              },
            ],
          ]),
        ),
      },
    },
  },
  variantsIconsColors: {
    Teal: '#4A616C',
    Graphene: '#636363',
    Palenight: '#686F93',
    Ocean: '#373C4E',
    Carbon: '#303236',
    Deepforest: '#2E483C',
  },
  themeIconVariants: {
    Teal: 'vira-icons-teal',
    Graphene: 'vira-icons-graphene',
    Palenight: 'vira-icons-palenight',
    Ocean: 'vira-icons-ocean',
    Carbon: 'vira-icons-carbon',
    Deepforest: 'vira-icons-deepforest',
  },
  variantsIcons: [
    '_folder_dark',
    '_folder_light',
    '_folder_root_dark',
    '_folder_root_light',
    ...a0E.map((_0x435331) => '_folder_' + _0x435331),
  ],
};
var a0J = () => a0u;
var a0U = {
  clear_accent: 'Clear accent',
  use_custom_accent: 'Use custom accent',
  activate: 'Activate',
  placeholders: {
    enter_custom_accent: 'Enter custom 6-digits HEX color',
    select_accent: 'Select the accent color to use',
  },
  accentButtonTooltip: 'Set the accent color',
  activation: {
    licenseTitle: 'Activate Vira Theme',
    licenseDescription: 'Activate Vira Theme',
    instanceNameTitle: 'Set custom instance name. Eg. Home computer',
    instanceNameDescription:
      'Optional name for this instance. The name will be used to identify your activation within your orders page.',
  },
  manageActivations: 'Manage activations',
  feedbacks: {
    no_valid_color: {
      title: 'Only 6 or 8 digits hex colors',
      message: 'Please enter a valid 6 digits hex color',
    },
    invalidColorFormat: 'Invalid hex color format',
    invalidHexAlpha: 'Alpha must be between 0 and 1',
    no_accent: {
      title: '',
      message: 'No vira theme accent found',
    },
    trial_activated: 'Vira Theme: enjoy your 7-days trial period.',
    trial_has_expired: 'Vira Theme: trial has expired.',
    active_trial: 'Vira Theme: evaluation period will end in',
    activate_or_remove_message:
      'Activate your license key to continue using the extension. NOTE: if you don’t activate Vira Theme, it’ll be removed and you’ll need to reinstall it to enter your license.',
    trial_hours_left: 'hours.',
    trial_days_left: 'days.',
    license_server_error: 'Vira Theme: license server error.',
    license_activation_failed: 'Vira Theme activation failed.',
    license_activation_success: 'Vira Theme activated successfully.',
    license_no_longer_valid: 'Vira Theme: license is no longer valid.',
    license_activation_too_soon: 'Vira Theme: wait 30s before activating again.',
    no_internet_connection: "No internet connection. Vira Theme can't be activated.",
    empty_license: "You entered an empty string. Vira Theme can't be activated.",
    license_validation: 'license key invalid format',
    instance_name_validation: 'instance name invalid format',
  },
};
var a0l = (_0x39ee36) => _0x39ee36.replace(/\s+/g, '-').toLowerCase();
var a0g = a0S(require('vscode'));
var a0R = async (_0x6f96a5, _0x4552b6) => {
  let { accentableIcons: _0x5060c8 } = a0u;
  let _0x2796b1 = _0x4552b6.replace(/\s+/g, '-').toLowerCase();
  await a0o(
    _0x6f96a5,
    (_0x8b57fd) => (
      _0x5060c8.forEach((_0x202ea0) => {
        let _0x26160c = _0x8b57fd.iconDefinitions[_0x202ea0];
        if (_0x26160c) {
          let { iconPath: _0x34d8d3 } = _0x26160c;
          let _0x40e37c = _0x34d8d3.includes('.accent.')
            ? _0x34d8d3.replace(/\.accent\.[^.]+\.svg$/, '.accent.' + _0x2796b1 + '.svg')
            : _0x34d8d3.replace('.svg', '.accent.' + _0x2796b1 + '.svg');
          let _0x432df0 = _0x34d8d3.replace(/\.accent\.[^.]+\.svg$/, '.svg');
          _0x26160c.iconPath = _0x4552b6 === 'Teal' ? _0x432df0 : _0x40e37c;
        }
      }),
      _0x8b57fd
    ),
  );
};
var a0D = async (_0x3f05f0, _0x14e994) => {
  let {
    accentableIcons: _0x5f5c49,
    foldersStyles: _0x840fb3,
    icons: {
      theme: { iconDefinitions: _0x38078a },
    },
  } = a0u;
  let _0x473ad7 = a0g['default'].Uri.joinPath(
    a0g['default'].Uri.file(_0x3f05f0.extensionPath),
    './build/themes',
  );
  let _0x575f9c = '.accent.' + _0x14e994 + '.svg';
  let _0x2f690c = _0x3f05f0.globalState.get('viraTheme.iconsCustomAccent') ?? null;
  let _0x2041bd = null;
  if (_0x2f690c) {
    _0x2041bd = '.accent.' + _0x2f690c + '.svg';
  }
  for (let _0x176b4b of _0x840fb3)
    for (let _0x2f0f75 of _0x5f5c49) {
      let _0x181517 = '' + _0x38078a[_0x2f0f75].iconPath.replace('filled/', _0x176b4b + '/');
      let _0x2699eb = a0g['default'].Uri.joinPath(_0x473ad7, _0x181517);
      let _0x18eebf = await a0g['default'].workspace.fs.readFile(_0x2699eb);
      let _0x34aa6a = new TextDecoder().decode(_0x18eebf);
      let _0x4ce885 = a0g['default'].Uri.joinPath(
        _0x473ad7,
        _0x181517.replace(/\.svg$/, _0x575f9c),
      );
      let _0x2a8e73 = _0x34aa6a.replace(/fill="#[^"]*"/g, 'fill="' + _0x14e994 + '"');
      let _0x103256 = new TextEncoder().encode(_0x2a8e73);
      if (_0x2041bd) {
        let _0xa1cabf = a0g['default'].Uri.joinPath(
          _0x473ad7,
          _0x181517.replace(/\.svg$/, _0x2041bd),
        );
        try {
          await a0g['default'].workspace.fs['delete'](_0xa1cabf);
        } catch {}
      }
      await a0g['default'].workspace.fs.writeFile(_0x4ce885, _0x103256);
    }
  await a0o(
    _0x3f05f0,
    (_0xaa77c7) => (
      _0x5f5c49.forEach((_0x216b5f) => {
        let _0x377368 = _0xaa77c7.iconDefinitions[_0x216b5f];
        if (_0x377368) {
          let { iconPath: _0x4ff1c4 } = _0x377368;
          let _0x4d9e96 = _0x4ff1c4.includes('.accent.')
            ? _0x4ff1c4.replace(/\.accent\.[^.]+\.svg$/, _0x575f9c)
            : _0x4ff1c4.replace(/\.svg$/, _0x575f9c);
          _0x377368.iconPath = _0x4d9e96;
        }
      }),
      _0xaa77c7
    ),
  );
  await _0x3f05f0.globalState.update('viraTheme.iconsCustomAccent', _0x14e994);
};
var a0z = async (_0x310795) => {
  let _0x4eaf8f = a0F['default'].workspace.getConfiguration().get('viraTheme.accent') ?? null;
  let _0x4b8341 = a0F['default'].workspace.getConfiguration().get('viraTheme.customAccent') ?? null;
  if (!_0x4eaf8f) {
    a0g['default'].window.showInformationMessage(a0U.feedbacks.no_accent.message);
    return;
  }
  if (_0x4b8341) {
    await a0D(_0x310795, _0x4b8341);
  } else {
    await a0R(_0x310795, _0x4eaf8f);
  }
};
var a0t = async (_0x2ad511, _0xdc875c) => {
  await a0o(
    _0x2ad511,
    (_0x5b56ba) => (
      Object.values(_0x5b56ba.iconDefinitions).forEach((_0x469458) => {
        if (_0xdc875c) {
          _0x469458.iconPath = _0x469458.iconPath.replace('filled', 'outlined');
        } else {
          _0x469458.iconPath = _0x469458.iconPath.replace('outlined', 'filled');
        }
      }),
      _0x5b56ba
    ),
  );
};
var a0X0 = a0S(require('vscode'));
var a0X1 = a0S(require('vscode'));
var a0X2 = async (_0x4be4d4) => {
  if (_0x4be4d4.affectsConfiguration('viraTheme.hidesExplorerArrows')) {
    await a0X1['default'].commands.executeCommand(
      'viraTheme.hideExplorerArrows',
      a0F['default'].workspace.getConfiguration().get('viraTheme.hidesExplorerArrows'),
    );
  }
};
var a0X3 = a0S(require('vscode'));
var a0X4 = () => {
  let _0x1f4578 = a0X3['default'].extensions.getExtension('vira.vsc-vira-theme');
  if (!_0x1f4578) {
    throw new Error('Extension with ID vira.vsc-vira-theme not found');
  }
  return _0x1f4578.packageJSON;
};
var a0X5 = a0S(require('vscode'));
var a0X6 = () => {
  let _0x2bee2b = a0X5['default'].workspace.getConfiguration().get('workbench.iconTheme');
  return _0x2bee2b
    ? a0X4().contributes.iconThemes.some((_0x2d094d) => _0x2bee2b.includes(_0x2d094d.id))
    : false;
};
var a0X7 = a0S(require('vscode'));
var a0X8 = async (_0x25d736) => {
  if (_0x25d736.affectsConfiguration('workbench.iconTheme') && a0X6()) {
    await a0X7['default'].commands.executeCommand('viraTheme.updateIconsAccent');
  }
};
var a0X9 = a0S(require('vscode'));
var a0XX = async (_0x5abdda) => {
  if (_0x5abdda.affectsConfiguration('viraTheme.useOutlinedIcons')) {
    await a0X9['default'].commands.executeCommand(
      'viraTheme.useOutlinedIcons',
      a0F['default'].workspace.getConfiguration().get('viraTheme.useOutlinedIcons'),
    );
  }
};
var a0Xi = a0X0['default'].workspace.onDidChangeConfiguration(async (_0x300baa) => {
  await a0XX(_0x300baa);
  await a0X2(_0x300baa);
  await a0X8(_0x300baa);
});
var a0XT = a0S(require('vscode'));
var a0XZ = async (_0xe544c1, _0x560d2e) => {
  try {
    let _0x4451a5 = Date.now();
    let _0x119adc =
      _0x560d2e ||
      a0XT['default'].env.appName +
        '.' +
        a0XT['default'].env.appHost +
        '.' +
        a0XT['default'].env.machineId +
        '.' +
        _0x4451a5;
    let _0x44737b = _0x119adc.replace(/\s+/g, '-').toLowerCase();
    let _0x44c11e = a0X4().name;
    let _0x91eeb4 = await Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        activated: true,
        instance_id: 'hacked',
        license_key: 'hacked',
      }),
    });
    if (_0x91eeb4.status === 500) {
      return {
        errorCode: 'VIRA_1000',
      };
    }
    let _0x11af66 = await _0x91eeb4.json();
    return _0x11af66.activated === undefined
      ? {
          errorCode: 'VIRA_2000',
        }
      : _0x11af66;
  } catch {
    return {
      errorCode: 'VIRA_3000',
    };
  }
};
var a0XY = a0S(require('vscode'));
var a0Xf = async (_0x32059e) => {
  await a0XY['default'].commands.executeCommand('setContext', 'viraTheme.isTrial', _0x32059e);
};
var a0Xa = async (_0x12198b, _0x4ab0f4, _0x5d6226) => {
  let _0x146ca2 = Date.now();
  let _0x3072fa = btoa(_0x4ab0f4 + '|' + _0x5d6226 + '|' + _0x146ca2);
  await _0x12198b.secrets.store('viraTheme.licenseKey', _0x3072fa);
};
var a0Xn = a0S(require('vscode'));
var a0XC = async (_0x4923e5, _0x40d784, _0x4d414b) => {
  let _0x4a2a26 = await a0XZ(_0x40d784, _0x4d414b);
  if ('errorCode' in _0x4a2a26) {
    a0Xn['default'].window.showErrorMessage(
      a0U.feedbacks.license_server_error + ' (' + _0x4a2a26.errorCode + ')',
    );
    return false;
  }
  if (_0x4a2a26.activated) {
    let { license_key: _0x4fc4dd, instance_id: _0x507d04 } = _0x4a2a26;
    await a0Xa(_0x4923e5, _0x4fc4dd, _0x507d04);
    await a0Xf(false);
    a0Xn['default'].window.showInformationMessage(a0U.feedbacks.license_activation_success);
    return true;
  }
  let _0xfd194a = a0U.feedbacks.license_activation_failed;
  if (_0x4a2a26.reason) {
    _0xfd194a = _0xfd194a + ' (' + _0x4a2a26.reason + ')';
  }
  if (
    (await a0Xn['default'].window.showErrorMessage(_0xfd194a, 'Manage activations')) ===
    'Manage activations'
  ) {
    a0Xn['default'].env.openExternal(
      a0Xn['default'].Uri.parse('https://app.lemonsqueezy.com/my-orders'),
    );
  }
  return false;
};
var a0Xj = async () => {
  let _0x2100f9 = [
    'https://www.google.com/favicon.ico',
    'https://www.baidu.com/favicon.ico',
    'https://www.cloudflare.com/favicon.ico',
    'https://www.microsoft.com/favicon.ico',
    'https://www.apple.com/favicon.ico',
    'https://www.amazon.com/favicon.ico',
    'https://www.qq.com/favicon.ico',
    'https://www.weibo.com/favicon.ico',
    'https://www.jd.com/favicon.ico',
    'https://vira.build/favicon.ico',
  ];
  for (let _0x16562c of _0x2100f9)
    try {
      await fetch(_0x16562c, {
        method: 'HEAD',
        mode: 'no-cors',
      });
      return true;
    } catch {}
  return false;
};
var a0Xm = a0S(require('vscode'));
var a0Xb = async () =>
  await a0Xm['default'].window.showInputBox({
    title: a0U.activation.licenseTitle,
    prompt: a0U.activation.licenseDescription,
    ignoreFocusOut: true,
    validateInput(_0x24b3e6) {
      return _0x24b3e6.length < 18 || /\s/.test(_0x24b3e6)
        ? a0U.feedbacks.license_validation
        : null;
    },
  });
var a0XN = async () =>
  (
    await a0Xm['default'].window.showInputBox({
      title: a0U.activation.instanceNameTitle,
      prompt: a0U.activation.instanceNameDescription,
      ignoreFocusOut: true,
      validateInput(_0x53cae8) {
        return /^[A-Za-z0-9 ]*$/.test(_0x53cae8) ? null : a0U.feedbacks.instance_name_validation;
      },
    })
  )?.['trim']();
var a0XW = async (_0xc75155) => {
  if (!(await a0Xj())) {
    a0Xm['default'].window.showWarningMessage(a0U.feedbacks.no_internet_connection);
    return false;
  }
  let _0xff297d = await a0Xb();
  if (!_0xff297d) {
    a0Xm['default'].window.showWarningMessage(a0U.feedbacks.empty_license);
    return false;
  }
  let _0x54278a = await a0XN();
  let _0x661261 = _0xc75155.globalState.get('viraTheme.latestActivationTry');
  return _0x661261 !== undefined && Date.now() - _0x661261 < 30000
    ? (a0Xm['default'].window.showWarningMessage(a0U.feedbacks.license_activation_too_soon), false)
    : (await _0xc75155.globalState.update('viraTheme.latestActivationTry', Date.now()),
      a0XC(_0xc75155, _0xff297d, _0x54278a));
};
var a0XS = a0S(require('vscode'));
var a0XI = async (_0x181076, _0x363fa6) => {
  try {
    let _0x397671 = await fetch('https://l.vira.build/api/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Vira-Theme': a0XS['default'].env.machineId,
      },
      body: JSON.stringify({
        license_key: _0x181076,
        instance_id: _0x363fa6,
      }),
    });
    if (_0x397671.status === 500) {
      return {
        errorCode: 'VIRA_1000',
      };
    }
    let _0x20f72d = await _0x397671.json();
    return _0x20f72d.validated === undefined
      ? {
          errorCode: 'VIRA_2000',
        }
      : _0x20f72d;
  } catch {
    return {
      errorCode: 'VIRA_3000',
    };
  }
};
var a0XO = a0S(require('vscode'));
var a0Xc = async () => {
  try {
    await a0XO['default'].commands.executeCommand(
      'workbench.extensions.uninstallExtension',
      'vira.vsc-vira-theme',
    );
  } catch {}
  try {
    await a0XO['default'].commands.executeCommand(
      '_workbench.extensions.action.cleanUpExtensionsFolder',
    );
  } catch {}
  a0XO['default'].commands.executeCommand('workbench.action.reloadWindow');
};
var a0XK = a0S(require('vscode'));
var a0Xr = async (_0x16ca70) => {
  let _0x2a6bba = await _0x16ca70.secrets.get('viraTheme.licenseKey');
  if (_0x2a6bba === undefined) {
    return;
  }
  let _0x24d921 = atob(_0x2a6bba);
  let [_0x36c854, _0x179a0a, _0x1ab812] = _0x24d921.split('|');
  let _0x3620de = new Date(Number(_0x1ab812));
  let _0x9a43d = new Date(_0x3620de);
  let _0x50f870 = Math.floor(Math.random() * 5);
  let _0xf47bc3 = Math.floor(Math.random() * 23);
  let _0x4c01d1 = Math.floor(Math.random() * 59);
  _0x9a43d.setDate(_0x3620de.getDate() + 20 + _0x50f870);
  _0x9a43d.setHours(_0xf47bc3);
  _0x9a43d.setSeconds(_0x4c01d1);
  if (Date.now() > _0x9a43d.getTime()) {
    let _0xa4606 = async () => {
      let _0x207802 = await a0XI(_0x36c854, _0x179a0a);
      if ('errorCode' in _0x207802) {
        setTimeout(async () => {
          await _0xa4606();
        }, 10800000);
        return;
      }
      if (_0x207802.validated) {
        await a0Xa(_0x16ca70, _0x36c854, _0x179a0a);
      } else {
        await _0x16ca70.secrets['delete']('viraTheme.licenseKey');
        if (
          (await a0XK['default'].window.showInformationMessage(
            a0U.feedbacks.license_no_longer_valid,
            {
              modal: true,
              detail: a0U.feedbacks.activate_or_remove_message,
            },
            'Activate',
          )) === 'Activate'
        ) {
          if (!(await a0XK['default'].commands.executeCommand('viraTheme.licenseInputBox'))) {
            await a0Xc();
          }
        } else {
          await a0Xc();
        }
      }
    };
    if (!(await a0Xj())) {
      setTimeout(async () => {
        await _0xa4606();
      }, 10800000);
      return;
    }
    await _0xa4606();
  }
};
var a0XG = a0S(require('vscode'));
var a0Xk = async (_0x388ef4) => {
  if ((await _0x388ef4.secrets.get('viraTheme.licenseKey')) !== undefined) {
    return;
  }
  let _0x3254d6 = await _0x388ef4.secrets.get('viraTheme.trialActivation');
  if (_0x3254d6 === undefined) {
    let _0x2dbbec = btoa(new Date().toUTCString());
    await _0x388ef4.secrets.store('viraTheme.trialActivation', _0x2dbbec);
    await a0Xf(true);
    a0XG['default'].window.showInformationMessage(a0U.feedbacks.trial_activated);
  } else {
    let _0x53d860 = atob(_0x3254d6);
    let _0x43dafa = new Date(_0x53d860);
    let _0x311302 = await a0Xj();
    let _0x495fb0 = new Date(_0x43dafa);
    _0x495fb0.setDate(_0x43dafa.getDate() + 7);
    let _0x583715 = new Date();
    if (_0x583715 > _0x495fb0) {
      if (
        (await a0XG['default'].window.showInformationMessage(
          a0U.feedbacks.trial_has_expired,
          {
            modal: true,
            detail: a0U.feedbacks.activate_or_remove_message,
          },
          _0x311302 ? 'Activate' : '',
        )) === 'Activate'
      ) {
        if (!(await a0XG['default'].commands.executeCommand('viraTheme.licenseInputBox'))) {
          await a0Xc();
        }
      } else {
        await a0Xc();
      }
    } else {
      let _0x417557 = a0U.feedbacks.active_trial;
      let _0x4b0116 = Math.ceil((_0x495fb0.getTime() - _0x583715.getTime()) / 3600000);
      let _0x5d3a47 = Math.ceil(_0x4b0116 / 24);
      if (_0x5d3a47 === 1) {
        _0x417557 += ' ' + _0x4b0116 + ' ' + a0U.feedbacks.trial_hours_left;
      } else {
        _0x417557 += ' ' + _0x5d3a47 + ' ' + a0U.feedbacks.trial_days_left;
      }
      await a0Xf(true);
      a0XG['default'].window.showInformationMessage(_0x417557);
      setTimeout(async () => {
        await a0Xk(_0x388ef4);
      }, 86400000);
    }
  }
};
var a0XA = async (_0x1306e3, _0x5b1f81) => {
  if (
    _0x5b1f81.key === 'viraTheme.licenseKey' &&
    (await _0x1306e3.secrets.get('viraTheme.licenseKey')) !== undefined
  ) {
    await a0Xf(false);
  }
};
var a0XV = (_0x2a02c5) => {
  _0x2a02c5.secrets.onDidChange(async (_0x11abf0) => {
    await a0XA(_0x2a02c5, _0x11abf0);
  });
};
var a0Xe = a0S(require('vscode'));
var a0Xd = async (_0xf4c20) => {
  try {
    await a0Xe['default'].workspace
      .getConfiguration()
      .update('workbench.colorCustomizations', _0xf4c20, true);
  } catch (_0x498e72) {
    await a0Xe['default'].window.showErrorMessage(String(_0x498e72));
  }
};
var a0XP = (_0x40965d) => /^#([0-9A-F]{6})$/i.test(_0x40965d);
var a0Xh = a0S(require('vscode'));
var a0Xv = () => {
  let _0x52e363 = [
    'workbench.preferredLightColorTheme',
    'workbench.preferredDarkColorTheme',
    'workbench.preferredHighContrastColorTheme',
    'workbench.preferredHighContrastLightColorTheme',
  ];
  let _0x495f55 =
    a0Xh['default'].workspace.getConfiguration().get('window.autoDetectColorScheme') ?? false;
  let _0x5c2a64 = a0Xh['default'].window.activeColorTheme;
  let _0x46503a = _0x495f55 ? _0x52e363[_0x5c2a64.kind - 1] : 'workbench.colorTheme';
  let _0x49003b = a0Xh['default'].workspace.getConfiguration().get(_0x46503a);
  return _0x49003b
    ? a0X4().contributes.themes.some((_0x5b281d) => _0x49003b.includes(_0x5b281d.label))
    : false;
};
var a0XQ = (_0x37a689, _0x3f17de) => {
  if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(_0x37a689)) {
    throw new Error(a0U.feedbacks.invalidColorFormat);
  }
  if (_0x3f17de !== undefined && (_0x3f17de < 0 || _0x3f17de > 1)) {
    throw new Error(a0U.feedbacks.invalidHexAlpha);
  }
  if (_0x3f17de !== undefined) {
    let _0x1b8cef = Math.round(_0x3f17de * 255)
      .toString(16)
      .padStart(2, '0');
    return '' + _0x37a689 + _0x1b8cef;
  }
  return _0x37a689;
};
var a0Xy = (_0x5cbe4f) => {
  let _0x2374d0 = _0x5cbe4f.replace(/^#/, '');
  if (_0x2374d0.length === 3) {
    _0x2374d0 =
      _0x2374d0[0] + _0x2374d0[0] + _0x2374d0[1] + _0x2374d0[1] + _0x2374d0[2] + _0x2374d0[2];
  }
  if (!/^[0-9A-Fa-f]{6}$/.test(_0x2374d0)) {
    return '#000000';
  }
  let _0x13cf84 = Number.parseInt(_0x2374d0.slice(0, 2), 16);
  let _0x1ffa6c = Number.parseInt(_0x2374d0.slice(2, 4), 16);
  let _0x1f95b3 = Number.parseInt(_0x2374d0.slice(4, 6), 16);
  return (_0x13cf84 * 299 + _0x1ffa6c * 587 + _0x1f95b3 * 114) / 1000 > 128 ? '#000000' : '#FFFFFF';
};
var a0Xs = a0S(require('vscode'));
var a0XM = (_0x58016c, _0x51238c) =>
  _0x58016c && _0x51238c < 1 ? a0XQ(_0x58016c, _0x51238c) : _0x58016c;
var a0XB = (_0x175d22, _0x1514f9) => {
  let _0x5bd3fd = /^#([0-9A-F]{6})$/i.test(_0x1514f9) ? _0x1514f9 : undefined;
  return Object.keys(_0x175d22).reduce((_0x4f1714, _0xe838d6) => {
    let {
      colorCustomizations: { accentForegrounds: _0xdf5975 },
    } = a0u;
    let _0x188f7d = _0x175d22[_0xe838d6];
    _0x4f1714[_0xe838d6] =
      _0x5bd3fd && _0x188f7d.alpha < 1 ? a0XQ(_0x5bd3fd, _0x188f7d.alpha) : _0x5bd3fd;
    if (_0x5bd3fd) {
      _0xdf5975.forEach((_0x1f6b0b) => {
        _0x4f1714[_0x1f6b0b] = a0Xy(_0x5bd3fd);
      });
    }
    return _0x4f1714;
  }, {});
};
var a0XL = (_0x2b2c20) =>
  Object.keys(_0x2b2c20).reduce((_0x1c161e, _0x1ab7a3) => {
    let _0x204f42 = _0x2b2c20[_0x1ab7a3];
    let _0x2eb4fc = /^#([0-9A-F]{6})$/i.test(_0x204f42.value) ? _0x204f42.value : undefined;
    _0x1c161e[_0x1ab7a3] =
      _0x2eb4fc && _0x204f42.alpha < 1 ? a0XQ(_0x2eb4fc, _0x204f42.alpha) : _0x2eb4fc;
    return _0x1c161e;
  }, {});
var a0Xx = (_0x2f87b3, _0x1198ee) => {
  Object.keys(_0x2f87b3).forEach((_0x32b4d8) => {
    if (_0x1198ee['[Vira*]']?.[_0x32b4d8]) {
      delete _0x1198ee['[Vira*]'][_0x32b4d8];
    }
  });
};
var a0XH = async () => {
  let _0x3e6804 = a0F['default'].workspace.getConfiguration().get('viraTheme.accent') ?? null;
  let _0x1588e9 = a0F['default'].workspace.getConfiguration().get('viraTheme.customAccent') ?? null;
  let _0x146399 = a0F['default'].workspace.getConfiguration().get('viraTheme.showBorders') ?? false;
  let _0x2d71e5 =
    a0F['default'].workspace.getConfiguration().get('viraTheme.contrastedTabs') ?? false;
  let _0x30ed9c =
    a0F['default'].workspace.getConfiguration().get('viraTheme.solidLineHighlight') ?? false;
  let _0x55ee43 =
    a0F['default'].workspace.getConfiguration().get('viraTheme.hidesShadows') ?? false;
  let _0x240c87 =
    a0F['default'].workspace.getConfiguration().get('viraTheme.useTopTabIndicator') ?? false;
  if (!a0Xv()) {
    return;
  }
  let _0x30c1c3 = a0Xs['default'].workspace.getConfiguration().get('workbench.colorCustomizations');
  if (!_0x30c1c3) {
    return;
  }
  let { '[Vira*]': _0x743337 } = _0x30c1c3;
  let {
    accents: _0x2a3546,
    colorCustomizations: {
      accentsProperties: _0x3822da,
      bordersProperties: _0x23e88e,
      contrastedTabsProperties: _0x44236f,
      lineHighlightProperties: _0xf12b5d,
      shadowProperties: _0x3ded5e,
      tabIndicatorProperties: _0xe1ee5,
    },
  } = a0u;
  let _0x47bf10 = {};
  let _0x58c0b8 = null;
  if (_0x1588e9) {
    _0x58c0b8 = _0x1588e9;
  } else if (_0x3e6804) {
    _0x58c0b8 = _0x2a3546[_0x3e6804];
  }
  let _0x275856 = (_0x37099c, _0x40d34f) => {
    let _0x2fa173 = {
      ..._0x37099c,
    };
    Object.keys(_0x2fa173).forEach((_0x46f051) => {
      _0x40d34f[_0x46f051] = {
        alpha: _0x2fa173[_0x46f051].alpha,
      };
    });
  };
  _0x275856(_0x240c87 ? _0xe1ee5.top : _0xe1ee5.bottom, _0x3822da);
  if (_0x58c0b8) {
    _0x47bf10 = a0XB(_0x3822da, _0x58c0b8);
  }
  let _0x5b00a5 = _0x146399 ? a0XL(_0x23e88e) : {};
  let _0x523d69 = _0x2d71e5 ? a0XL(_0x44236f) : {};
  let _0x50b2fb = _0x30ed9c ? a0XL(_0xf12b5d) : {};
  let _0x52b301 = _0x55ee43 ? a0XL(_0x3ded5e) : {};
  let _0x4317dd = {
    ..._0x30c1c3,
    '[Vira*]': {
      ..._0x743337,
      ..._0x3822da,
      ..._0x23e88e,
      ..._0x44236f,
      ..._0xf12b5d,
      ..._0x3ded5e,
      ..._0x47bf10,
      ..._0x5b00a5,
      ..._0x523d69,
      ..._0x50b2fb,
      ..._0x52b301,
    },
  };
  if (!_0x146399) {
    a0Xx(_0x23e88e, _0x4317dd);
  }
  if (!_0x2d71e5) {
    a0Xx(_0x44236f, _0x4317dd);
  }
  if (!_0x30ed9c) {
    a0Xx(_0xf12b5d, _0x4317dd);
  }
  if (!_0x55ee43) {
    a0Xx(_0x3ded5e, _0x4317dd);
  }
  await a0Xd(_0x4317dd);
};
var a0Xw = (_0x453c7a) =>
  [
    'workbench.colorTheme',
    'workbench.preferredLightColorTheme',
    'workbench.preferredDarkColorTheme',
    'workbench.preferredHighContrastColorTheme',
    'workbench.preferredHighContrastLightColorTheme',
    'window.autoDetectColorScheme',
  ].some((_0x4289af) => _0x453c7a.affectsConfiguration(_0x4289af));
var a0Xo = a0S(require('vscode'));
var a0Xq = async (_0x228275) => {
  let _0x3ff4c9 = _0x228275.globalState.get('viraTheme.colorCustomizations');
  let { colorCustomizations: _0xedc799 } = a0u;
  let _0x195b4c = Object.keys(_0xedc799).flatMap((_0x1f052d) => {
    let _0x590085 = _0xedc799[_0x1f052d];
    return Object.keys(_0x590085);
  });
  if (_0x3ff4c9) {
    let _0x38c614 = _0x3ff4c9.filter((_0x1bbd5b) => !_0x195b4c.includes(_0x1bbd5b));
    if (_0x38c614.length > 0) {
      let _0x1cb376 = a0Xo['default'].workspace
        .getConfiguration()
        .get('workbench.colorCustomizations');
      if (!_0x1cb376) {
        return;
      }
      let { '[Vira*]': _0x21ae4f, ..._0x4addb0 } = _0x1cb376;
      let _0x31fc4b = _0x21ae4f
        ? {
            ..._0x21ae4f,
          }
        : {};
      _0x38c614.forEach((_0x2aad1a) => {
        if (_0x31fc4b[_0x2aad1a]) {
          delete _0x31fc4b[_0x2aad1a];
        }
      });
      let _0x1cd9c9 = {
        ..._0x4addb0,
        '[Vira*]': {
          ..._0x31fc4b,
        },
      };
      await a0Xd(_0x1cd9c9);
    }
  }
  await _0x228275.globalState.update('viraTheme.colorCustomizations', _0x195b4c);
  await a0XH();
  a0Xo['default'].workspace.onDidChangeConfiguration(async (_0x40e7b0) => {
    if (a0Xw(_0x40e7b0)) {
      await a0XH();
    }
  });
};
var a0XF = a0S(require('vscode'));
var a0Xp = (_0x48e182) =>
  a0XF['default'].workspace.getConfiguration().has('viraTheme.' + _0x48e182);
var a0XE = a0S(require('vscode'));
var a0Xu = async (_0x2039e8, _0x950500, _0xdee0a3 = a0XE['default'].ConfigurationTarget.Global) => {
  await a0XE['default'].workspace
    .getConfiguration()
    .update('viraTheme.' + _0x2039e8, _0x950500, _0xdee0a3);
};
var a0XJ = a0S(require('vscode'));
var a0Xg = async (_0x1bf494) => {
  let _0x15a89f = Object.keys(a0u.accents).map((_0x52c7c6) => {
    let _0x5b1cb8 = _0x52c7c6.replace(/\s+/g, '-').toLowerCase();
    let _0xe11d7d = a0XJ['default'].Uri.joinPath(
      a0XJ['default'].Uri.file(_0x1bf494.extensionPath),
      './build',
      'assets',
      _0x5b1cb8 + '.svg',
    );
    let _0x34c6cd = _0x52c7c6 === 'Clear accent';
    let _0xde07cd =
      a0XF['default'].workspace.getConfiguration().has('viraTheme.accent') &&
      a0F['default'].workspace.getConfiguration().get('viraTheme.accent');
    return {
      label: _0x52c7c6,
      picked: _0xde07cd === _0x52c7c6,
      iconPath: _0x34c6cd ? new a0XJ['default'].ThemeIcon('close') : _0xe11d7d,
    };
  });
  _0x15a89f.unshift({
    label: 'Use custom accent',
    iconPath: new a0XJ['default'].ThemeIcon('paintcan'),
  });
  _0x15a89f.push({
    label: 'Clear accent',
    iconPath: new a0XJ['default'].ThemeIcon('close'),
  });
  return (
    (
      await a0XJ['default'].window.showQuickPick(_0x15a89f, {
        placeHolder: a0U.placeholders.select_accent,
      })
    )?.['label'] ?? ''
  );
};
var a0XR = async () =>
  await a0XJ['default'].window.showInputBox({
    placeHolder: a0U.placeholders.enter_custom_accent,
    validateInput(_0x2caeec) {
      return /^#([0-9A-F]{6})$/i.test(_0x2caeec) ? null : a0U.feedbacks.no_valid_color.message;
    },
  });
var a0XD = async (_0x3d9a16) => {
  let _0x165c39 = await a0Xg(_0x3d9a16);
  let _0x2b4307 = a0XJ['default'].workspace.getConfiguration().get('workbench.colorCustomizations');
  if (!_0x2b4307) {
    return;
  }
  let { '[Vira*]': _0x44614c } = _0x2b4307;
  if (!(_0x165c39 === '' && _0x44614c)) {
    if (_0x165c39 === 'Use custom accent') {
      let _0x2c61e2 = await a0XR();
      if (!_0x2c61e2 || _0x2c61e2 === '') {
        return;
      }
      await a0Xu('customAccent', _0x2c61e2);
    }
    if (_0x165c39 === 'Clear accent') {
      await a0XJ['default'].commands.executeCommand('viraTheme.clearAccent');
    }
    if (_0x165c39 !== 'Use custom accent' && _0x165c39 !== 'Clear accent') {
      await a0Xu('accent', _0x165c39);
    }
  }
};
var a0Xz = a0S(require('vscode'));
var a0Xt = async (_0x1d0b47) =>
  a0Xz['default'].workspace.getConfiguration().update('viraTheme.' + _0x1d0b47, undefined, true);
var a0i0 = async (_0xe0ffbd = ['customAccent', 'accent']) => {
  for (let _0x11a9d6 of _0xe0ffbd)
    await a0Xz['default'].workspace
      .getConfiguration()
      .update('viraTheme.' + _0x11a9d6, undefined, true);
};
var a0i1 = async () => {
  await a0XH();
};
var a0i2 = async () => {
  await a0XH();
};
var a0i3 = async () => {
  await a0XH();
};
var a0i4 = async () => {
  await a0XH();
};
var a0i5 = async () => {
  await a0XH();
};
var a0i6 = async () => {
  await a0XH();
};
var a0i7 = (_0x11ec69) =>
  ['workbench.iconTheme'].some((_0x34c337) => _0x11ec69.affectsConfiguration(_0x34c337));
var a0i8 = a0S(require('vscode'));
var a0i9 = () => {
  let _0x2390a0 = a0i8['default'].window.createStatusBarItem(
    a0i8['default'].StatusBarAlignment.Right,
    -9999,
  );
  let _0x3afd50 = () => {
    if (_0x2390a0) {
      if (a0Xv() || a0X6()) {
        _0x2390a0.show();
      } else {
        _0x2390a0.hide();
      }
    }
  };
  let _0x3a4f36 = () => {
    if (!_0x2390a0) {
      return;
    }
    let _0x5c9844 = a0F['default'].workspace.getConfiguration().get('viraTheme.accent') ?? 'Teal';
    let _0x3a1959 =
      '$(paintcan) ' +
      (a0F['default'].workspace.getConfiguration().get('viraTheme.customAccent')
        ? 'Custom accent'
        : _0x5c9844);
    _0x2390a0.text = _0x3a1959 + ' ';
    _0x2390a0.color =
      a0F['default'].workspace.getConfiguration().get('viraTheme.customAccent') ||
      a0u.accents[_0x5c9844];
    _0x3afd50();
    setTimeout(() => {
      if (_0x2390a0) {
        _0x2390a0.text = _0x3a1959;
      }
    }, 0);
  };
  let _0x405527 = a0F['default'].workspace.getConfiguration().get('viraTheme.accent') ?? 'Teal';
  _0x2390a0.text = '$(paintcan) ' + _0x405527;
  _0x2390a0.tooltip = 'Set the accent color';
  _0x2390a0.command = 'viraTheme.accentPicker';
  _0x2390a0.color = a0u.accents[_0x405527];
  _0x3afd50();
  a0i8['default'].workspace.onDidChangeConfiguration((_0x268b7a) => {
    if (
      _0x268b7a.affectsConfiguration('viraTheme.accent') ||
      _0x268b7a.affectsConfiguration('viraTheme.customAccent') ||
      a0Xw(_0x268b7a) ||
      a0i7(_0x268b7a)
    ) {
      setTimeout(_0x3a4f36, 200);
    }
  });
};
var a0iX = a0S(require('vscode'));
var a0ii = a0S(require('vscode'));
var a0iT = async (_0x3f146d) => {
  if (
    _0x3f146d.affectsConfiguration('viraTheme.accent') ||
    _0x3f146d.affectsConfiguration('viraTheme.customAccent')
  ) {
    setTimeout(async () => {
      await a0ii['default'].commands.executeCommand('viraTheme.updateAccent');
      await a0ii['default'].commands.executeCommand('viraTheme.updateIconsAccent');
    }, 200);
  }
};
var a0iZ = a0S(require('vscode'));
var a0iY = async (_0x1f197d) => {
  if (a0Xv() && _0x1f197d.affectsConfiguration('viraTheme.showBorders')) {
    setTimeout(async () => {
      await a0iZ['default'].commands.executeCommand(
        'viraTheme.showBorders',
        a0F['default'].workspace.getConfiguration().get('viraTheme.showBorders') ?? false,
      );
    }, 200);
  }
};
var a0if = a0S(require('vscode'));
var a0ia = async (_0x2eded0) => {
  if (a0Xv() && _0x2eded0.affectsConfiguration('viraTheme.contrastedTabs')) {
    setTimeout(async () => {
      await a0if['default'].commands.executeCommand(
        'viraTheme.showContrastedTabs',
        a0F['default'].workspace.getConfiguration().get('viraTheme.contrastedTabs') ?? false,
      );
    }, 200);
  }
};
var a0in = a0S(require('vscode'));
var a0iC = async (_0x15ed8f) => {
  if (a0Xv() && _0x15ed8f.affectsConfiguration('viraTheme.hidesShadows')) {
    setTimeout(async () => {
      await a0in['default'].commands.executeCommand(
        'viraTheme.hidesShadows',
        a0F['default'].workspace.getConfiguration().get('viraTheme.hidesShadows') ?? false,
      );
    }, 200);
  }
};
var a0ij = a0S(require('vscode'));
var a0im = async (_0x555235) => {
  if (a0Xv() && _0x555235.affectsConfiguration('viraTheme.solidLineHighlight')) {
    setTimeout(async () => {
      await a0ij['default'].commands.executeCommand(
        'viraTheme.useSolidLineHighlight',
        a0F['default'].workspace.getConfiguration().get('viraTheme.solidLineHighlight') ?? false,
      );
    }, 200);
  }
};
var a0ib = a0S(require('vscode'));
var a0iN = async (_0x3cdb0d) => {
  if (a0Xv() && _0x3cdb0d.affectsConfiguration('viraTheme.useTopTabIndicator')) {
    setTimeout(async () => {
      await a0ib['default'].commands.executeCommand('viraTheme.setTopTabIndicator');
    }, 200);
  }
};
var a0iW = a0iX['default'].workspace.onDidChangeConfiguration(async (_0x2b8716) => {
  await a0iT(_0x2b8716);
  await a0iY(_0x2b8716);
  await a0ia(_0x2b8716);
  await a0im(_0x2b8716);
  await a0iN(_0x2b8716);
  await a0iC(_0x2b8716);
});
var a0iS = a0S(require('vscode'));
async function a0iI(_0x5a206a) {
  let _0x26a8f8 = [
    a0iS['default'].commands.registerCommand(
      'viraTheme.accentPicker',
      async () => await a0XD(_0x5a206a),
    ),
    a0iS['default'].commands.registerCommand('viraTheme.clearAccent', a0i0),
    a0iS['default'].commands.registerCommand('viraTheme.updateAccent', a0i6),
    a0iS['default'].commands.registerCommand('viraTheme.showBorders', a0i3),
    a0iS['default'].commands.registerCommand('viraTheme.showContrastedTabs', a0i1),
    a0iS['default'].commands.registerCommand('viraTheme.useSolidLineHighlight', a0i4),
    a0iS['default'].commands.registerCommand('viraTheme.hidesShadows', a0i2),
    a0iS['default'].commands.registerCommand('viraTheme.setTopTabIndicator', a0i5),
    a0iS['default'].commands.registerCommand(
      'viraTheme.updateIconsAccent',
      async () => await a0z(_0x5a206a),
    ),
    a0iS['default'].commands.registerCommand(
      'viraTheme.hideExplorerArrows',
      async (_0x2aef67) => await a0q(_0x5a206a, _0x2aef67),
    ),
    a0iS['default'].commands.registerCommand(
      'viraTheme.useOutlinedIcons',
      async (_0x511974) => await a0t(_0x5a206a, _0x511974),
    ),
    a0iS['default'].commands.registerCommand(
      'viraTheme.licenseInputBox',
      async () => await a0XW(_0x5a206a),
    ),
  ];
  _0x5a206a.globalState.update('viraTheme.version', a0X4().version);
  let _0x47ef1e = _0x5a206a.globalState.get('viraTheme.version');
  _0x5a206a.subscriptions.push(..._0x26a8f8, a0iW, a0Xi);
  if (a0iS['default'].env.isNewAppInstall && _0x47ef1e) {
    _0x5a206a.globalState.update(_0x47ef1e, a0X4().version);
  }
  if (a0F['default'].workspace.getConfiguration().get('viraTheme.useOutlinedIcons') === true) {
    await a0iS['default'].commands.executeCommand(
      'viraTheme.useOutlinedIcons',
      a0F['default'].workspace.getConfiguration().get('viraTheme.useOutlinedIcons'),
    );
  }
  if (a0F['default'].workspace.getConfiguration().get('viraTheme.accent')) {
    await a0iS['default'].commands.executeCommand('viraTheme.updateIconsAccent');
  }
  if (a0F['default'].workspace.getConfiguration().get('viraTheme.hidesExplorerArrows') === false) {
    await a0iS['default'].commands.executeCommand(
      'viraTheme.hideExplorerArrows',
      a0F['default'].workspace.getConfiguration().get('viraTheme.hidesExplorerArrows'),
    );
  }
  a0i9();
  await a0Xq(_0x5a206a);
  await a0Xk(_0x5a206a);
  await a0Xr(_0x5a206a);
  a0XV(_0x5a206a);
}
async function a0iO() {
  await a0Xf(false);
}
