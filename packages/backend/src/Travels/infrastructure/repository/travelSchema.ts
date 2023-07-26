/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')

const travelSchema = new mongoose.Schema(
  {
    activities: [
      {
        category: {
          type: String,
        },
        description: {
          type: String,
        },
        documentUrls: {
          type: String,
        },
        endDate: {
          type: Date,
        },
        location: {
          type: String,
        },
        name: {
          type: String,
        },
        price: {
          type: String,
        },
        rooms: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        transportType: {
          type: String,
        },
      },
    ],
    description: {
      type: String,
    },
    endDate: {
      type: Date,
    },
    expenses: {
      accomodationPrice: {
        type: Number,
      },
      budget: {
        type: Number,
      },
      entertainmentPrice: {
        type: Number,
      },
      foodPrice: {
        type: Number,
      },
      transportPrice: {
        type: Number,
      },
    },
    id: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    ownerId: {
      type: String,
    },
    shared: {
      type: Boolean,
    },
    startDate: {
      type: Date,
    },
    travelers: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Travel', travelSchema)
