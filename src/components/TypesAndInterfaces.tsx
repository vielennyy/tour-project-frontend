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

export interface MapWindowSize {
    width: string,
    height: string,
    zoom: number,
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

export interface RegisterTypes {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface UserContextTypes {
  isAuthorize: boolean;
  token: string;
  id: string
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