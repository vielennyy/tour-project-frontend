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
    id: number,
    name?: string,
    email: string,
    password_digest: string,
    phone?: string,
    role: number,
}

export interface PlaceCoordinates {
    lat:number;
    lng:number;
}

export interface Attraction {
    id: number;
    title: string;
    description: string;
    geolocations: {
      id: number;
      latitude: string;
      longitude: string;
      street: string;
      suite: string | null;
      locality: string;
      zip_code: string | null;
      geolocationable_id: number;
      geolocationable_type: string;
      created_at: string;
      updated_at: string;
    }[];
    created_at: string;
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


