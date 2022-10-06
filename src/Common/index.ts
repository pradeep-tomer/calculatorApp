export interface buttonType {
  title: string;
  style?: object;
  onPress?: any;
  disabled?: boolean;
  btnStyle?: object;
}

export interface noteType {
  index: number;
  item: object;
  separators: object;
}

export interface TextInputType {
  placeholder: string;
  containerStyle?: object;
  style?: object;
  multiline?: boolean;
  onChangeText?: any;
  placeholderTextColor?: string;
  secureTextEntry?:boolean
}
export interface lapDataType {
  count: string;
  time: string;
}

export interface noteFieldType {
  title?: string;
  description?: string;
  date?: string;
  id?: string;
}

export interface noteItemType {
  item: {
    title?: string;
    description?: string;
    date?: string;
  };
}

export interface actionType {
  type: string;
  payload: any;
}
export interface SocialBtnType {
  onPress?: any;
  title: string;
  Style?: object;
  btnStyle?: object;
  icon?: any;
}

export interface registrationType {
  email: string;
  password: string;
  fullName: string;
  confirmPass: string;
}

export interface loginType {
  email: string;
  password: string;
}
