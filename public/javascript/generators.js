Blockly.JavaScript['control_loop'] = function (block) {
  let repeatCount = block.getFieldValue('OP');
  let loopBody = Blockly.JavaScript.statementToCode(block, 'DO');
  loopBody = loopBody.trim();
  let length = loopBody.toString().length;
  let code = `4${repeatCount}${length.toString().padStart(2, '0')}${loopBody}`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light'] = function (block) {
  let position = block.getFieldValue('OP0');
  let color = block.getFieldValue('OP1');
  color =
    color === '0'
      ? Math.floor(Math.random() * 7 + 1)
          .toString(2)
          .padStart(3, '0')
      : color;
  let code = `2${position}${color}`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light_off'] = function (block) {
  let position = block.getFieldValue('OP0');
  let code = `2${position}000`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light_with_time'] = function (block) {
  let position = block.getFieldValue('OP0');
  let color = block.getFieldValue('OP1');
  color =
    color === '0'
      ? Math.floor(Math.random() * 7 + 1)
          .toString(2)
          .padStart(3, '0')
      : color;
  let time = block.getFieldValue('OP2');
  let code = `2${position}${color}51${time}2${position}000`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light_change_with_time'] = function (block) {
  let position = block.getFieldValue('OP0');
  let fromColor = block.getFieldValue('OP1');
  fromColor =
    fromColor === '0'
      ? Math.floor(Math.random() * 7 + 1)
          .toString(2)
          .padStart(3, '0')
      : fromColor;
  let toColor = block.getFieldValue('OP2');
  toColor =
    toColor === '0'
      ? Math.floor(Math.random() * 7 + 1)
          .toString(2)
          .padStart(3, '0')
      : toColor;
  let time = block.getFieldValue('OP3');
  let code = `2${position}${fromColor}51${time}2${position}${toColor}`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['movements_x'] = function (block) {
  var dir = block.getFieldValue('DIR');
  var sec = block.getFieldValue('SEC');
  var speed = block.getFieldValue('SPEED');
  var cordinate = parseInt(sec) * parseInt(speed);
  var code = '11';
  code += dir;
  code += `${cordinate.toString().padStart(3, '0')}`;
  code += '+';
  code += '000';
  code += `${speed.toString().padStart(3, '0')}`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['movement_y'] = function (block) {
  var dir = block.getFieldValue('DIR');
  var speed = block.getFieldValue('SPEED');
  var code = '6';
  code += dir;
  code += speed;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['drift'] = function (block) {
  var dir = block.getFieldValue('DIR');
  var speed = block.getFieldValue('SPEED');
  var code = '6';
  code += dir;
  code += speed;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['stop'] = function (block) {
  var code = '60200';
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['rotate'] = function (block) {
  var speed = block.getFieldValue('SPEED');
  var code = '67';
  code += speed;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['angular_movement'] = function (block) {
  let primaryDirection = block.getFieldValue('OP0');
  let angleValue =
    parseInt(block.getFieldValue('INPUT0'), 10) * (Math.PI / 180);
  let secondaryDirection = block.getFieldValue('OP1');
  let time = parseInt(block.getFieldValue('OP2'), 10);
  let speed = parseInt(block.getFieldValue('OP3'), 10);
  let height = speed * time;
  let xCoordinate = height * Math.sin(angleValue);
  let yCoordinate = height * Math.cos(angleValue);
  let directionMap = {
    FL: {
      X: '-',
      Y: '+',
    },
    FR: {
      X: '+',
      Y: '+',
    },
    BL: {
      X: '-',
      Y: '-',
    },
    BR: {
      X: '+',
      Y: '-',
    },
  };
  let code = '11';
  code += `${directionMap[primaryDirection + secondaryDirection]['X']}`;
  code += `${Math.round(xCoordinate).toString().padStart(3, '0')}`;
  code += `${directionMap[primaryDirection + secondaryDirection]['Y']}`;
  code += `${Math.round(yCoordinate).toString().padStart(3, '0')}`;
  code += `${speed.toString().padStart(3, '0')}`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['movement_with_stop'] = function (block) {
  var dir = block.getFieldValue('DIR');
  var sec = block.getFieldValue('SEC');
  var speed = block.getFieldValue('SPEED');
  var code = '6';
  code += dir;
  code += speed;
  code += `51${sec}`;
  code += '60200';
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['clap_detection'] = function (block) {
  var code = '8';
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['buzzer'] = function (block) {
  var dropdown_op = block.getFieldValue('OP');
  var code = `0${dropdown_op}`;
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['color_detection'] = function (block) {
  var dropdown_op = block.getFieldValue('OP');
  var code = `72${dropdown_op}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['distance_detection'] = function (block) {
  var number_distance = block.getFieldValue('distance');
  var distance = String(number_distance);
  var code = `71${distance.padStart(3, '0')}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['wait_until'] = function (block) {
  let condition = Blockly.JavaScript.valueToCode(
    block,
    'INPUT0',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let body = Blockly.JavaScript.statementToCode(block, 'INPUT1');
  var code = condition.replace('(', '').replace(')', '') + body.trim();
  return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
