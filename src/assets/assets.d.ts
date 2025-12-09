export type TeamMember = {
  name: string;
  title: string;
  image: string;
};

export const company_logos: string[];

export const teamData: TeamMember[];

export interface Assets {
  logo: string;
  arrow_icon: string;
  group_profile: string;
  bgImage1: string;
  bgImage2: string;
  hero_img: string;
  ads_icon: string;
  content_icon: string;
  marketing_icon: string;
  social_icon: string;
  menu_icon: string;
  close_icon: string;
  work_mobile_app: string;
  work_fitness_app: string;
  work_dashboard_management: string;
  email_icon: string;
  person_icon: string;
  facebook_icon: string;
  twitter_icon: string;
  instagram_icon: string;
  linkedin_icon: string;
  logo_dark: string;
  menu_icon_dark: string;
  sun_icon: string;
  moon_icon: string;
}

declare const assets: Assets;
export default assets;
