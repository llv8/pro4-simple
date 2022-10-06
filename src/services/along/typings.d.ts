declare namespace API {
  type addBusinessConstParams = {
    id?: number;
    label?: string;
    sequence?: number;
    type?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
  };

  type addCompanyParams = {
    'addressList[0].city'?: number;
    'addressList[0].cityName'?: string;
    'addressList[0].country'?: number;
    'addressList[0].countryName'?: string;
    'addressList[0].detail'?: string;
    'addressList[0].district'?: number;
    'addressList[0].districtName'?: string;
    'addressList[0].id'?: number;
    'addressList[0].state'?: number;
    'addressList[0].stateName'?: string;
    'attachmentEntityList[0].fileType'?: string;
    'attachmentEntityList[0].id'?: number;
    'attachmentEntityList[0].name'?: string;
    'attachmentEntityList[0].path'?: string;
    'attachmentEntityList[0].size'?: number;
    'emailList[0].email'?: string;
    'emailList[0].id'?: number;
    'emailList[0].type.id'?: number;
    'emailList[0].type.label'?: string;
    'emailList[0].type.sequence'?: number;
    'emailList[0].type.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    englishName?: string;
    'exhibitionScopeList[0].id'?: number;
    'exhibitionScopeList[0].label'?: string;
    'exhibitionScopeList[0].sequence'?: number;
    'exhibitionScopeList[0].type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    fax?: string;
    id?: number;
    logo?: string;
    'marketSegmentationList[0].id'?: number;
    'marketSegmentationList[0].label'?: string;
    'marketSegmentationList[0].sequence'?: number;
    'marketSegmentationList[0].type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    name?: string;
    'phoneList[0].id'?: number;
    'phoneList[0].phone'?: string;
    'phoneList[0].type.id'?: number;
    'phoneList[0].type.label'?: string;
    'phoneList[0].type.sequence'?: number;
    'phoneList[0].type.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    remarks?: string;
    'status.id'?: number;
    'status.label'?: string;
    'status.sequence'?: number;
    'status.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    'tagList[0].color'?: string;
    'tagList[0].id'?: number;
    'tagList[0].level'?: number;
    'tagList[0].name'?: string;
    'tagList[0].sequence'?: number;
    'type.id'?: number;
    'type.label'?: string;
    'type.sequence'?: number;
    'type.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    'userList[0].age'?: number;
    'userList[0].dateOfBirth'?: string;
    'userList[0].firstName'?: string;
    'userList[0].gender'?: 'male' | 'female';
    'userList[0].id'?: number;
    'userList[0].lastName'?: string;
    website?: string;
    zipCode?: string;
  };

  type addContactParams = {
    firstName?: string;
    id?: number;
    lastName?: string;
  };

  type Address = {
    city?: number;
    cityName?: string;
    country?: number;
    countryName?: string;
    detail?: string;
    district?: number;
    districtName?: string;
    id?: number;
    state?: number;
    stateName?: string;
  };

  type addTagParams = {
    color?: string;
    id?: number;
    level?: number;
    name?: string;
    sequence?: number;
  };

  type addUserParams = {
    id?: number;
    name?: string;
    password?: string;
    'user.age'?: number;
    'user.dateOfBirth'?: string;
    'user.firstName'?: string;
    'user.gender'?: 'male' | 'female';
    'user.id'?: number;
    'user.lastName'?: string;
  };

  type Attachment = {
    fileType?: string;
    id?: number;
    name?: string;
    path?: string;
    size?: number;
  };

  type BusinessConst = {
    id?: number;
    label?: string;
    sequence?: number;
    type?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
  };

  type Company = {
    addressList?: Address[];
    attachmentEntityList?: Attachment[];
    emailList?: Email[];
    englishName?: string;
    exhibitionScopeList?: BusinessConst[];
    fax?: string;
    id?: number;
    logo?: string;
    marketSegmentationList?: BusinessConst[];
    name?: string;
    phoneList?: Phone[];
    remarks?: string;
    status?: BusinessConst;
    tagList?: Tag[];
    type?: BusinessConst;
    userList?: user[];
    website?: string;
    zipCode?: string;
  };

  type Contact = {
    firstName?: string;
    id?: number;
    lastName?: string;
  };

  type deleteBusinessConstParams = {
    /** id */
    id: number;
  };

  type deleteCompanyParams = {
    /** id */
    id: number;
  };

  type deleteContactParams = {
    /** id */
    id: number;
  };

  type deleteTagParams = {
    /** id */
    id: number;
  };

  type deleteUserParams = {
    /** id */
    id: number;
  };

  type Email = {
    email?: string;
    id?: number;
    type?: BusinessConst;
  };

  type findBusinessConstParams = {
    id?: number;
    label?: string;
    type:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
  };

  type findCompanyParams = {
    id?: number;
    name?: string;
    'page.pageNum'?: number;
    'page.pageSize'?: number;
  };

  type findContactsParams = {
    firstName?: string;
    id?: number;
    lastName?: string;
    'page.pageNum'?: number;
    'page.pageSize'?: number;
  };

  type findTagsParams = {
    id?: number;
    level?: number;
    name?: string;
  };

  type findUsersParams = {
    email?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    name?: string;
    'page.pageNum'?: number;
    'page.pageSize'?: number;
    phone?: string;
  };

  type getBusinessConstParams = {
    /** id */
    id: number;
  };

  type getCompanyParams = {
    /** id */
    id: number;
  };

  type getContactParams = {
    /** id */
    id: number;
  };

  type getTagParams = {
    /** id */
    id: number;
  };

  type getUserParams = {
    /** id */
    id: number;
  };

  type loginParams = {
    /** name */
    name?: string;
    /** password */
    password?: string;
  };

  type PageInfo = {
    count?: number;
    pageNum?: number;
    pageSize?: number;
    totalPage?: number;
  };

  type PagesOfCompany = {
    elements?: Company[];
    page?: PageInfo;
  };

  type PagesOfuser = {
    elements?: user[];
    page?: PageInfo;
  };

  type Phone = {
    id?: number;
    phone?: string;
    type?: BusinessConst;
  };

  type ResultOfBusinessConst = {
    code?: number;
    data?: BusinessConst;
    message?: string;
    success?: boolean;
  };

  type ResultOfCompany = {
    code?: number;
    data?: Company;
    message?: string;
    success?: boolean;
  };

  type ResultOfContact = {
    code?: number;
    data?: Contact;
    message?: string;
    success?: boolean;
  };

  type ResultOfListOfBusinessConst = {
    code?: number;
    data?: BusinessConst[];
    message?: string;
    success?: boolean;
  };

  type ResultOfListOfContact = {
    code?: number;
    data?: Contact[];
    message?: string;
    success?: boolean;
  };

  type ResultOfListOfTag = {
    code?: number;
    data?: Tag[];
    message?: string;
    success?: boolean;
  };

  type ResultOfPagesOfCompany = {
    code?: number;
    data?: PagesOfCompany;
    message?: string;
    success?: boolean;
  };

  type ResultOfPagesOfuser = {
    code?: number;
    data?: PagesOfuser;
    message?: string;
    success?: boolean;
  };

  type ResultOfTag = {
    code?: number;
    data?: Tag;
    message?: string;
    success?: boolean;
  };

  type ResultOfuser = {
    code?: number;
    data?: user;
    message?: string;
    success?: boolean;
  };

  type Tag = {
    color?: string;
    id?: number;
    level?: number;
    name?: string;
    sequence?: number;
  };

  type updateBusinessConstParams = {
    id?: number;
    label?: string;
    sequence?: number;
    type?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
  };

  type updateCompanyParams = {
    'addressList[0].city'?: number;
    'addressList[0].cityName'?: string;
    'addressList[0].country'?: number;
    'addressList[0].countryName'?: string;
    'addressList[0].detail'?: string;
    'addressList[0].district'?: number;
    'addressList[0].districtName'?: string;
    'addressList[0].id'?: number;
    'addressList[0].state'?: number;
    'addressList[0].stateName'?: string;
    'attachmentEntityList[0].fileType'?: string;
    'attachmentEntityList[0].id'?: number;
    'attachmentEntityList[0].name'?: string;
    'attachmentEntityList[0].path'?: string;
    'attachmentEntityList[0].size'?: number;
    'emailList[0].email'?: string;
    'emailList[0].id'?: number;
    'emailList[0].type.id'?: number;
    'emailList[0].type.label'?: string;
    'emailList[0].type.sequence'?: number;
    'emailList[0].type.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    englishName?: string;
    'exhibitionScopeList[0].id'?: number;
    'exhibitionScopeList[0].label'?: string;
    'exhibitionScopeList[0].sequence'?: number;
    'exhibitionScopeList[0].type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    fax?: string;
    id?: number;
    logo?: string;
    'marketSegmentationList[0].id'?: number;
    'marketSegmentationList[0].label'?: string;
    'marketSegmentationList[0].sequence'?: number;
    'marketSegmentationList[0].type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    name?: string;
    'phoneList[0].id'?: number;
    'phoneList[0].phone'?: string;
    'phoneList[0].type.id'?: number;
    'phoneList[0].type.label'?: string;
    'phoneList[0].type.sequence'?: number;
    'phoneList[0].type.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    remarks?: string;
    'status.id'?: number;
    'status.label'?: string;
    'status.sequence'?: number;
    'status.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    'tagList[0].color'?: string;
    'tagList[0].id'?: number;
    'tagList[0].level'?: number;
    'tagList[0].name'?: string;
    'tagList[0].sequence'?: number;
    'type.id'?: number;
    'type.label'?: string;
    'type.sequence'?: number;
    'type.type'?:
      | 'Address'
      | 'Phone'
      | 'Email'
      | 'ExhibitionScope'
      | 'Customer'
      | 'CustomerStatus'
      | 'MarketSegmentation'
      | 'Department';
    'userList[0].age'?: number;
    'userList[0].dateOfBirth'?: string;
    'userList[0].firstName'?: string;
    'userList[0].gender'?: 'male' | 'female';
    'userList[0].id'?: number;
    'userList[0].lastName'?: string;
    website?: string;
    zipCode?: string;
  };

  type updateContactParams = {
    firstName?: string;
    id?: number;
    lastName?: string;
  };

  type updateTagParams = {
    color?: string;
    id?: number;
    level?: number;
    name?: string;
    sequence?: number;
  };

  type updateUserParams = {
    age?: number;
    dateOfBirth?: string;
    firstName?: string;
    gender?: 'male' | 'female';
    id?: number;
    lastName?: string;
  };

  type user = {
    age?: number;
    dateOfBirth?: string;
    firstName?: string;
    gender?: 'male' | 'female';
    id?: number;
    lastName?: string;
  };
}
