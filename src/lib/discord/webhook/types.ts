/**
 * Discord Webhook Payload
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params}
 */
export interface WebhookPayload {
  content?: string;
  username?: string;
  avatar_url?: string;
  tts?: boolean;
  embeds?: Embed[];
  allowed_mentions?: AllowedMentions;
  components?: MessageComponent[];
  payload_json?: string;
  attachments?: Attachment[];
  flags?: number;
  thread_name?: string;
  applied_tags?: string[];
  poll?: PollCreateRequest;
}

/**
 * Discord Webhook Embed
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object}
 */
export interface Embed {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  /** @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure} */
  footer?: {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  /** @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure} */
  image?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  /** @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure} */
  thumbnail?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  /** @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure} */
  video?: {
    url: string;
    height?: number;
    width?: number;
  };
  /** @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure} */
  provider?: {
    name?: string;
    url?: string;
  };
  /** @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure} */
  author?: {
    name: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  /** @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure} */
  fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
}

/**
 * Discord Allowed Mentions
 * @see {@link https://discord.com/developers/docs/resources/message#allowed-mentions-object}
 */
export interface AllowedMentions {
  /** @see {@link https://discord.com/developers/docs/resources/message#allowed-mentions-object-allowed-mention-types} */
  parse?: ("roles" | "users" | "everyone")[];
  roles?: string[];
  users?: string[];
  replied_user?: boolean;
}

/**
 * Discord Message Component
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object}
 */
export interface MessageComponent {
  type: number;
  disabled?: boolean;
  components?: (
    | MessageComponent
    | ButtonComponent
    | SelectMenuComponent
    | TextInputComponent
  )[];
}

/** @see {@link https://discord.com/developers/docs/interactions/message-components#button-object} */
export interface ButtonComponent extends MessageComponent {
  style: number;
  label?: string;
  emoji?: Emoji;
  custom_id?: string;
  sku_id?: string;
  url?: string;
}

/** @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object} */
export interface SelectMenuComponent extends MessageComponent {
  custom_id: string;
  options?: SelectOption[];
  /** @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types} */
  channel_types?: string[];
  placeholder?: string;
  default_values?: SelectDefaultValue[];
  min_values?: number;
  max_values?: number;
}

/** @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure} */
export interface SelectOption {
  label: string;
  value: string;
  description?: string;
  emoji?: Emoji;
  default?: boolean;
}

/** @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure} */
export interface SelectDefaultValue {
  id: string;
  type: string;
}

/** @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object} */
export interface TextInputComponent extends MessageComponent {
  custom_id: string;
  style: number;
  label: string;
  min_length?: number;
  max_length?: number;
  required?: boolean;
  value?: string;
  placeholder?: string;
}

/**
 * Discord Emoji
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object}
 */
export interface Emoji {
  id?: string;
  name: string;
  roles?: Role[];
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

/**
 * Discord Role
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */
export interface Role {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string;
  unicode_emoji?: string;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTags;
  flags: number;
}

/** @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure} */
export interface RoleTags {
  bot_id?: string;
  integration_id?: string;
  premium_subscriber?: null;
  subscription_listing_id?: string;
  available_for_purchase?: null;
  guild_connections?: null;
}

/**
 * Discord User
 * @see {@link https://discord.com/developers/docs/resources/user#user-object}
 */
export interface User {
  id: string;
  username: string;
  discriminator: string;
  global_name?: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
  avatar_decoration_data?: AvatarDecorationData;
}

/** @see {@link https://discord.com/developers/docs/resources/user#avatar-decoration-data-object} */
export interface AvatarDecorationData {
  asset: string;
  sku_id: string;
}

/**
 * Discord Attachment
 * @see {@link https://discord.com/developers/docs/resources/message#attachment-object}
 */
export interface Attachment {
  id: string;
  filename: string;
  title?: string;
  description?: string;
  /** @see {@link https://en.wikipedia.org/wiki/Media_type} */
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
  duration_secs?: number;
  waveform?: string;
  flags?: number;
}

/**
 * Discord Poll
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object}
 */
export interface Poll {
  question: PollMedia;
  answers: PollAnswer[];
  expiry: string;
  allow_multiselect: boolean;
  /** @see {@link https://discord.com/developers/docs/resources/poll#layout-type} */
  layout_type: number;
  results?: PollResults;
}

/**
 * Discord Poll Create Request
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object}
 */
export interface PollCreateRequest {
  question: PollMedia;
  answers: PollAnswer[];
  duration?: number;
  allow_multiselect?: boolean;
  layout_type?: number;
}

/** @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure} */
export interface PollMedia {
  text?: string;
  emoji?: Emoji;
}

/** @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object} */
export interface PollAnswer {
  answer_id: number;
  poll_media: PollMedia;
}

/** @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure} */
export interface PollResults {
  is_finalized: boolean;
  answer_counts: PollAnswerCount[];
}

/** @see  {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure} */
export interface PollAnswerCount {
  id: number;
  count: number;
  me_voted: boolean;
}
