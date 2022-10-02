export interface IGetMovieConfigurationResponse {
  images: IImageConfigInfo;
  changeKeys: string[];
}

export interface IImageConfigInfo {
  baseUrl: string;
  secureBaseUrl: string;
  backdropSizes: string[];
  logoSizes: string[];
  posterSizes: string[];
  profileSizes: string[];
  stillSizes: string[];
}
