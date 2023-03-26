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

export interface MapItemCard {
    coordinates: {
        id: number;
        latitude: string;
        longitude: string;
        coordinatable_type: string;
        coordinatable_id: number;
      }[];
      created_at: string;
      description: string;
      id: number;
      title: string;
      updated_at: string;
  }
  