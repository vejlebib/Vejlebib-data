import SimpleSchema from 'simpl-schema';

Eboger = new Meteor.Collection('eboger');

EbogerSchema = new SimpleSchema(
  {
    desc: {
      type: String
    },

    year: {
      type: Number
    },

    total: {
      type: Number
    }
  });

  Eboger.attachSchema(EbogerSchema);
