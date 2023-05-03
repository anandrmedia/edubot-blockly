Blockly.Blocks['control_loop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('repeat')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9'],
        ]),
        'OP'
      )
      .appendField('times');
    this.appendStatementInput('DO').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#ebd902');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// ------------------------------------------

Blockly.Blocks['edu_bot_light'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('switch on')
      .appendField(
        new Blockly.FieldDropdown([
          ['front left', '4'],
          ['front right', '3'],
          ['middle left', '6'],
          ['middle right', '5'],
          ['back left', '1'],
          ['back right', '2'],
          ['all', '7'],
        ]),
        'OP0'
      )
      .appendField('LED to')
      .appendField(
        new Blockly.FieldDropdown([
          ['red', '100'],
          ['green', '010'],
          ['blue', '001'],
          ['yellow', '110'],
          ['magenta', '101'],
          ['cyan', '011'],
          ['white', '111'],
          ['random', '0'],
        ]),
        'OP1'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8202d1');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['edu_bot_light_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('switch off')
      .appendField(
        new Blockly.FieldDropdown([
          ['front left', '4'],
          ['front right', '3'],
          ['middle left', '6'],
          ['middle right', '5'],
          ['back left', '1'],
          ['back right', '2'],
          ['all', '7'],
        ]),
        'OP0'
      )
      .appendField('LED');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8202d1');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['edu_bot_light_with_time'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('switch on')
      .appendField(
        new Blockly.FieldDropdown([
          ['front left', '4'],
          ['front right', '3'],
          ['middle left', '6'],
          ['middle right', '5'],
          ['back left', '1'],
          ['back right', '2'],
          ['all', '7'],
        ]),
        'OP0'
      )
      .appendField('LED to')
      .appendField(
        new Blockly.FieldDropdown([
          ['red', '100'],
          ['green', '010'],
          ['blue', '001'],
          ['yellow', '110'],
          ['magenta', '101'],
          ['cyan', '011'],
          ['white', '111'],
          ['random', '0'],
        ]),
        'OP1'
      )
      .appendField('for')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '10'],
          ['2', '20'],
          ['3', '30'],
          ['4', '40'],
          ['5', '50'],
          ['6', '60'],
          ['7', '70'],
          ['8', '80'],
          ['9', '90'],
        ]),
        'OP2'
      )
      .appendField('second');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8202d1');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['edu_bot_light_change_with_time'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('change')
      .appendField(
        new Blockly.FieldDropdown([
          ['front left', '4'],
          ['front right', '3'],
          ['middle left', '6'],
          ['middle right', '5'],
          ['back left', '1'],
          ['back right', '2'],
          ['all', '7'],
        ]),
        'OP0'
      )
      .appendField('LED from')
      .appendField(
        new Blockly.FieldDropdown([
          ['red', '100'],
          ['green', '010'],
          ['blue', '001'],
          ['yellow', '110'],
          ['magenta', '101'],
          ['cyan', '011'],
          ['white', '111'],
          ['random', '0'],
        ]),
        'OP1'
      )
      .appendField('to')
      .appendField(
        new Blockly.FieldDropdown([
          ['red', '100'],
          ['green', '010'],
          ['blue', '001'],
          ['yellow', '110'],
          ['magenta', '101'],
          ['cyan', '011'],
          ['white', '111'],
          ['random', '0'],
        ]),
        'OP2'
      )
      .appendField('in')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '10'],
          ['2', '20'],
          ['3', '30'],
          ['4', '40'],
          ['5', '50'],
          ['6', '60'],
          ['7', '70'],
          ['8', '80'],
          ['9', '90'],
        ]),
        'OP3'
      )
      .appendField('second');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8202d1');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// ------------------------------------------

Blockly.Blocks['movements_x'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('move')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', '-'],
          ['right', '+'],
        ]),
        'DIR'
      )
      .appendField('for')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9'],
        ]),
        'SEC'
      )
      .appendField('seconds with')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '200'],
          ['2', '225'],
          ['3', '250'],
          ['4', '275'],
          ['5', '300'],
          ['6', '325'],
          ['7', '350'],
          ['8', '375'],
          ['9', '400'],
          ['10', '425'],
          ['11', '450'],
          ['12', '475'],
        ]),
        'SPEED'
      )
      .appendField('speed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#45d104');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['movement_y'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('move')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', '1'],
          ['backward', '2'],
        ]),
        'DIR'
      )
      .appendField('with')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '200'],
          ['2', '225'],
          ['3', '250'],
          ['4', '275'],
          ['5', '300'],
          ['6', '325'],
          ['7', '350'],
          ['8', '375'],
          ['9', '400'],
          ['10', '425'],
          ['11', '450'],
          ['12', '475'],
        ]),
        'SPEED'
      )
      .appendField('speed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d90271');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['drift'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('drift')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward right', '3'],
          ['forward left', '4'],
          ['backward left', '5'],
          ['backward right', '6'],
          ['left', '8'],
          ['right', '9'],
        ]),
        'DIR'
      )
      .appendField('with')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '200'],
          ['2', '225'],
          ['3', '250'],
          ['4', '275'],
          ['5', '300'],
          ['6', '325'],
          ['7', '350'],
          ['8', '375'],
          ['9', '400'],
          ['10', '425'],
          ['11', '450'],
          ['12', '475'],
        ]),
        'SPEED'
      )
      .appendField('speed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#d90271');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['stop'] = {
  init: function () {
    this.appendDummyInput().appendField('stop');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['rotate'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('rotate above a point with')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '200'],
          ['2', '225'],
          ['3', '250'],
          ['4', '275'],
          ['5', '300'],
          ['6', '325'],
          ['7', '350'],
          ['8', '375'],
          ['9', '400'],
          ['10', '425'],
          ['11', '450'],
          ['12', '475'],
        ]),
        'SPEED'
      )
      .appendField('speed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#02abe3');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['angular_movement'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('turn')
      .appendField(new Blockly.FieldDropdown([['forward', 'F']]), 'OP0')
      .appendField('with')
      .appendField(new Blockly.FieldAngle(60), 'INPUT0')
      .appendField('to')
      .appendField(
        new Blockly.FieldDropdown([
          ['right', 'R'],
          ['left', 'L'],
        ]),
        'OP1'
      )
      .appendField('for')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9'],
        ]),
        'OP2'
      )
      .appendField('second with')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '200'],
          ['2', '225'],
          ['3', '250'],
          ['4', '275'],
          ['5', '300'],
          ['6', '325'],
          ['7', '350'],
          ['8', '375'],
          ['9', '400'],
          ['10', '425'],
          ['11', '450'],
          ['12', '475'],
        ]),
        'OP3'
      )
      .appendField('speed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#02abe3');
    this.setTooltip('');
    this.setHelpUrl('');
    this.getField('INPUT0').setValidator(this.validate.bind(this));
  },
  validate: function (value) {
    if (value >= 1 && value <= 89) {
      return value;
    } else {
      return null;
    }
  },
};

Blockly.Blocks['movement_with_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('move', 'F0')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', '1'],
          ['backward', '2'],
          ['forward right', '3'],
          ['forward left', '4'],
          ['backward left', '5'],
          ['backward right', '6'],
          ['left', '8'],
          ['right', '9'],
        ]),
        'DIR'
      )
      .appendField('for')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '10'],
          ['2', '20'],
          ['3', '30'],
          ['4', '40'],
          ['5', '50'],
          ['6', '60'],
          ['7', '70'],
          ['8', '80'],
          ['9', '90'],
        ]),
        'SEC'
      )
      .appendField('seconds with')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '200'],
          ['2', '225'],
          ['3', '250'],
          ['4', '275'],
          ['5', '300'],
          ['6', '325'],
          ['7', '350'],
          ['8', '375'],
          ['9', '400'],
          ['10', '425'],
          ['11', '450'],
          ['12', '475'],
        ]),
        'SPEED'
      )
      .appendField('speed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#45d104');
    this.setTooltip('');
    this.setHelpUrl('');
    this.getField('DIR').setValidator(this.validate);
  },
  validate: function (value) {
    if (value === '1' || value === '2') {
      this.getSourceBlock().getField('F0').setValue('move');
    } else {
      this.getSourceBlock().getField('F0').setValue('drift');
    }
  },
};

// ------------------------------------------

Blockly.Blocks['clap_detection'] = {
  init: function () {
    this.appendDummyInput().appendField('on clap detection');
    this.setNextStatement(true, null);
    this.setColour('#fc0335');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['buzzer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('play on buzzer')
      .appendField(
        new Blockly.FieldDropdown([
          ['Hello!', '1'],
          ['Thank You!', '2'],
          ['How are you?', '3'],
        ]),
        'OP'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00e0d9');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['color_detection'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('color is')
      .appendField(
        new Blockly.FieldDropdown([
          ['red', '100'],
          ['green', '010'],
          ['blue', '001'],
        ]),
        'OP'
      );
    this.setOutput(true, null);
    this.setColour('#fc6b03');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['distance_detection'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('distance to obstacles is')
      .appendField(new Blockly.FieldNumber(0, 0, 999), 'distance');
    this.setOutput(true, null);
    this.setColour('#fc6b03');
    this.setTooltip('');
    this.setHelpUrl('');
    this.getField('distance').setValidator(this.validate);
  },
  validate: function (value) {
    return Math.round(value);
  },
};

Blockly.Blocks['wait_until'] = {
  init: function () {
    this.appendValueInput('INPUT0').setCheck(null).appendField('if');
    this.appendStatementInput('INPUT1').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#fc6b03');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
