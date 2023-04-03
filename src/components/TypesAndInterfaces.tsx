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


export interface UserToken {
    token: string | undefined;
}

export interface LoginTypes {
  email: string;
  password: string;
}