export interface PartnerInfoCardProps {
  isCompany:boolean;
  firstName:string;
  lastName:string;
  phoneNumber:string;
  email:string;
  legalEntityName?:string;
  EDRPOUcode?:number;
  legalEntityAdress?:string;
  ZIPcode?:number;
}

export interface User {
  created_at: string;
  email: string;
  id: number;
  name: string;
  password_digest: string;
  reset_password_sent_at: string | null;
  reset_password_token: string | null;
  phone?: string;
  role: string;
  stripe_id: string;
  updated_at: string;
}


export interface PlaceCoordinates {
  lat:number;
  lng:number;
}

export interface Attraction {
  id: number;
  title: string;
  description: string;
  image_url: string | undefined;
  geolocations: {
    id: number;
    geolocationable_id: number;
    geolocationable_type: string;
    latitude: string;
    longitude: string;
    street: string;
    suite: string | null;
    locality: string;
    zip_code: string | null;
    created_at: string;
    updated_at: string;
  }[];
  updated_at: string;
}

export interface Geolocations {
    id: number;
    geolocationable_id: number;
    geolocationable_type: string;
    latitude: string;
    longitude: string;
    street: string;
    suite: string | null;
    locality: string;
    zip_code: string | null;
    created_at: string;
    updated_at: string;
}

export interface MapWindowSize {
    width: string,
    height: string,
}

export interface Accommodation {
  id: number;
  name: string;
  kind: string;
  address_owner: string;
  email: string;
  person: string;
  phone: string;
  reg_code: string;
  description: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  images: string[]
}

export interface AccommodationData {
  room: [];
  accommodation: Accommodation;
  image_urls: [];
}

export interface Facilities {
  breakfast: boolean;
  credit_card: boolean;
  free_parking: boolean;
  pets: boolean;
  wi_fi: boolean;
}

export interface Room {
  accommodation_id: number;
  bed: string;
  created_at: string;
  description: string;
  id: number;
  name: string;
  places: number;
  price_per_night: string;
  quantity: number;
  updated_at: string;
}
export interface RoomBookingProps {
  id: number,
  userId: number,
  roomId: number,
  numberOfPeople: number,
  checkIn: Date,
  checkOut: Date,
  confirmation: boolean,
  note: string,
}


export interface UserToken {
  token: string | undefined;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface ForgotPassword {
  email: string;
}

export interface RegisterTypes {
  name: string;
  email: string;
  password: string;
}

export interface UserContextTypes {
  isAuthorize: boolean;
  token: string;
  id: string
}

export interface PopupContextTypes {
  isOpen: boolean;
}

export interface UserObject {
  created_at?: string | undefined;
  email?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
  password_digest?: string | undefined;
  reset_password_sent_at?: string | null;
  reset_password_token?: string | null;
  role?: string | undefined;
  stripe_id?: string | undefined;
  updated_at?: string | undefined;
}

export interface AccommodationFormValues {
  name: string,
  description: string,
  address_owner: string,
  phone: string,
  email: string,
  kind: string,
  user_id: number,
  reg_code: string,
  status?: string,
  person: string,
  images?: File[],
};

export interface MainAccommodationInfoProps {
  data:{
    accommodation: {
      id: number;
      name: string;
      description: string;
      kind: string;
      person: string;
      phone: string;
      email: string;
      reg_code: string;
      address_owner: string;
      status: string;
      created_at: Date;
      updated_at: string;
      user_id: number;
    }
    image_urls: string[];
  }
}

export interface AccommodationRoomInfo {
  name: string,
  places: string,
  quantity: string,
  description: string,
  bed: string,
  price_per_night: string,
  images: File[],
}

export interface AccommodationRoomResponce {
  image_urls: string[];
  room: {
    accommodation_id: number;
    bed: string;
    created_at: string;
    description: string;
    id: number;
    name: string;
    places: number;
    price_per_night: string;
    quantity: number;
    updated_at: string;
  }
}

  export interface RoomAmenities {
    conditioner: boolean,
    tv: boolean,
    refrigerator: boolean,
    kettle: boolean,
    mv_owen: boolean,
    hair_dryer: boolean,
    nice_view: boolean,
    inclusive: boolean,
  }

 export interface Reservation {
    id: number;
    number_of_peoples: number;
    check_in: string;
    check_out: string;
    user_id: number;
    room_id: number;
    created_at: string;
    updated_at: string;
    note?: string;
    confirmation: "pending" | "approved" | "cancelled";
    full_name: string;
    phone: string;
  }

export interface RoomAmenities {
  conditioner: boolean,
  tv: boolean,
  refrigerator: boolean,
  kettle: boolean,
  mv_owen: boolean,
  hair_dryer: boolean,
  nice_view: boolean,
  inclusive: boolean,
}

export interface CommentType {
  id: string;
  type: string;
  attributes: {
    body: string;
    commentable_id: number;
    commentable_type: string;
    created_at: string;
    id: number;
    status: string;
    name: string;
    updated_at: string;
    user_id: number;
  }
}

export interface Catering {
  id: number;
  kind: string;
  name: string;
  description: string;
  address_owner: string;
  phone: string;
  email: string;
  person: string;
  reg_code: string;
  status: string;
  places: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  images: string[];
}