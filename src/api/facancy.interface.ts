export interface IVacancy {
  canEdit: boolean;
  is_closed: boolean;
  id: number;
  id_client: number;
  payment_from: number;
  payment_to: number;
  date_pub_to: number;
  date_archived: number;
  date_published: number;
  address: string;
  profession: string;
  work: null;
  compensation: null;
  candidat: string;
  metro: [];
  currency: string;
  vacancyRichText: string;
  covid_vaccination_requirement: IInnerOBj;
  contact: null;
  moveable: boolean;
  agreement: boolean;
  anonymous: boolean;
  is_archive: boolean;
  is_storage: boolean;
  type_of_work: IInnerOBj;
  place_of_work: IInnerOBj;
  education: IInnerOBj;
  experience: IInnerOBj;
  maritalstatus: IInnerOBj;
  children: IInnerOBj;
  client: {
    id: number;
    title: string;
    link: string;
    industry: [];
    description: string;
    vacancy_count: number;
    staff_count: string;
    client_logo: string;
    address: null;
    addresses: [];
    url: string;
    short_reg: false;
    is_blocked: false;
    registered_date: number;
    town: ITown;
  };
  languages: [];
  driving_licence: [];
  catalogues: [
    {
      id: 438;
      title: 'Продажи';
      key: 438;
      positions: [
        {
          id: 453;
          title: 'Продукты питания';
          key: 453;
        },
        {
          id: 460;
          title: 'Текстиль, одежда, обувь';
          key: 460;
        },
        {
          id: 461;
          title: 'Телекоммуникации, сетевые решения, средства связи';
          key: 461;
        },
        {
          id: 463;
          title: 'Товары народного потребления';
          key: 463;
        },
        {
          id: 466;
          title: 'Электротехническое оборудование, светотехника';
          key: 466;
        }
      ];
    }
  ];
  agency: IInnerOBj;
  town: ITown;
  already_sent_on_vacancy: boolean;
  rejected: boolean;
  response_info: [];
  phone: null;
  phones: null;
  fax: null;
  faxes: null;
  favorite: boolean;
  client_logo: string;
  highlight: boolean;
  age_from: 0;
  age_to: 0;
  gender: IInnerOBj;
  firm_name: string;
  firm_activity: string;
  link: string;
  isBlacklisted: boolean;
  latitude: number;
  longitude: number;
}

interface ITown {
  id: number;
  title: string;
  declension: string;
  hasMetro: boolean;
  genitive: string;
}

interface IInnerOBj {
  id: number;
  title: string;
}
