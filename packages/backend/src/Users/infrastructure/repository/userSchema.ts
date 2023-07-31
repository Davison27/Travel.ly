const userSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
    },
    fullName: {
      required: true,
      type: String,
    },
    ownerId: {
      required: true,
      type: String,
    },
    profileImageUrl: {
      default: '',
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('User', userSchema)
