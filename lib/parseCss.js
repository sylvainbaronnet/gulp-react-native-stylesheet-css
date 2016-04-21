var Handle = require('./Handle');

var format = require('./properties/all'),
  margingAndPadding = require('./properties/marginAndPadding'),
  borderRadius = require('./properties/border-radius'),
  border = require('./properties/border'),
  boxShadow = require('./properties/boxShadow'),
  flex = require('./properties/flex'),
  transform = require('./properties/transform'),
  lineHeight = require('./properties/lineHeight'),
  final = require('./saveAll');

module.exports = function (css) {
  var handle = new Handle(css);

  handle.use(['margin', 'padding'], margingAndPadding);
  handle.use([
    'border',
    'border-top',
    'borderTop',
    'border-bottom',
    'borderBottom',
    'border-left',
    'borderLeft',
    'border-right',
    'borderRight',
    'border-width',
    'borderWidth',
    'border-top-width',
    'borderTopWidth',
    'border-right-width',
    'borderRightWidth',
    'border-bottom-width',
    'borderBottomWidth',
    'border-left-width',
    'borderLeftWidth',
    'border-style',
    'borderStyle',
    'border-top-style',
    'borderTopStyle',
    'border-right-style',
    'borderRightStyle',
    'border-bottom-style',
    'borderBottomStyle',
    'border-left-style',
    'borderLeftStyle',
    'border-color',
    'borderColor'
  ], border);
  handle.use([
    'border-radius',
    'borderRadius',
    'border-top-left-radius',
    'borderTopLeftRadius',
    'border-top-right-radius',
    'borderTopRightRadius',
    'border-bottom-right-radius',
    'borderBottomRightRadius',
    'border-bottom-left-radius',
    'borderBottomLeftRadius',
  ], borderRadius);
  handle.use(['box-shadow', 'boxShadow'], boxShadow);
  handle.use(['flex'], flex);
  handle.use(['transform'], transform);
  handle.use(['line-height'], lineHeight);
  handle.use(format);

  handle.final(final);

  return handle.do();
};
