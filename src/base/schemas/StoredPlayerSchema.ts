import { model, Schema } from 'mongoose';

export interface IStoredPlayerSchema {
  steamId: string;
  steamIdType: 'steamID3' | 'steamID' | 'steamID64';
  discordId: string;
  authenticated?: boolean;
  reauthenticateAfter?: Date;
  authenticationCount?: number;
}

export default model<IStoredPlayerSchema>(
  'StoredPlayer',
  new Schema<IStoredPlayerSchema>(
    {
      discordId: { type: String, required: true, unique: true },
      steamId: { type: String, required: true },
      steamIdType: {
        type: String,
        required: true,
        enum: ['steamID3', 'steamID', 'steamID64'],
      },
      authenticated: {
        type: Boolean,
        default: false,
      },
      reauthenticateAfter: {
        type: Date,
      },
      authenticationCount: {
        type: Number,
        default: 1,
      },
    },
    {
      timestamps: true,
    }
  )
);
