interface Image {
  height: number;
  width: number;
  url: string;
}

interface Badges {
  is_dm_able: boolean;
  is_secret_dm_able: boolean;
  is_blocked: boolean;
  can_media_tag: boolean;
}

interface Tokens {
  inline: boolean;
}

export interface UserData {
  id: string;
  id_str: string;
  verified: boolean;
  ext_is_blue_verified: boolean;
  badges: Badges;
  name: string;
  screen_name: string;
  profile_image_url: string;
  profile_image_url_https: string;
  location: string;
  is_protected: boolean;
  rounded_score: number;
  social_proof: number;
  connecting_user_count: number;
  connecting_user_ids: string[];
  social_proofs_ordered: string[];
  social_context: string;
  tokens: Tokens;
}

interface Entities {
  media: {
    display_url: string;
    expanded_url: string;
    id_str: string;
    media_key: string;
    media_url_https: string;
    type: string;
    url: string;
  }[];
}

interface ExtendedEntities {
  // Define properties for extended entities if needed
}

interface DisplayTextRange {
  // Define properties for display text range if needed
}

export interface TwitterData {
  content: {
    itemContent: {
      tweet_results: {
        result: {
          legacy: {
            created_at: string;
            conversation_id_str: string;
            display_text_range: DisplayTextRange; // You might want to specify the type if available
            entities: Entities;
            extended_entities: ExtendedEntities;
            favorite_count: number;
            favorited: boolean;
            full_text: string;
            is_quote_status: boolean;
            lang: string;
            possibly_sensitive: boolean;
            possibly_sensitive_editable: boolean;
            quote_count: number;
            reply_count: number;
            retweet_count: number;
            retweeted: boolean;
            user_id_str: string;
            id_str: string;
          };
        };
      };
    };
  };
}

interface Links {
  href: string;
  label: string;
}

export interface Footer {
  Cards: string[];
  Links: Links[];
}
