export default new SimpleSchema({
  createdAt: {
    type: Date,
    label: '创建时间',
    optional: true,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();
      }
    }
  },
  createdBy: {
    type: String,
    label: '创建人',
    optional: true,
    autoValue: function () {
      if (!this.isSet) {
        if (this.isInsert) {
          return this.userId || 'admin';
        } else if (this.isUpsert) {
          return { $setOnInsert: this.userId || 'admin' };
        } else {
          this.unset();
        }
      }
    }
  },
  lastUpdatedAt: {
    type: Date,
    label: '更新时间',
    optional: true,
    autoValue: function () {
      if (this.isUpdate)
        return new Date();
    }
  },
  lastUpdatedBy: {
    type: String,
    label: '更新人',
    optional: true,
    autoValue: function () {
      if (!this.isSet) {
        if (this.isUpdate)
          return this.userId || 'admin';
      }
    }
  }
});