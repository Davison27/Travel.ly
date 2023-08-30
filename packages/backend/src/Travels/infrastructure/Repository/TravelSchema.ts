/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')

export const TravelSchema = new mongoose.Schema(
  {
    activities: [
      {
        activityId: {
          type: String,
        },
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
        imageUrl: {
          type: String,
        },
        location: {
          type: String,
        },
        name: {
          type: String,
        },
        price: {
          type: Number,
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
        travelId: {
          type: String,
        },
      },
    ],
    budget: {
      type: Number,
    },
    description: {
      type: String,
    },
    endDate: {
      type: Date,
    },
    id: {
      type: String,
    },
    imageUrl: {
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

module.exports = mongoose.model('Travel', TravelSchema)
