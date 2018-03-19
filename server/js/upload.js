Meteor.methods({
  parseUpload(data) {
    check(data, Array);

    for (let i = 0; i < data.length; i++) {
      let item = data[i],
        exists = Eboger.findOne({
          desc: item.desc
        });

      if (!exists) {
        Eboger.insert(item);
      } else {
        console.warn('Rejected. This item already exists.');
      }
    }
  }
});
