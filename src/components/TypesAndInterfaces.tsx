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

export interface UserToken {
    token?: string;
}