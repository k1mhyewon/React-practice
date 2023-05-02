import { MenuList } from "../enum/EnumMenuList";

export interface Menu {
  name: MenuList;
  submenus: string[];
}

export const menus: Menu[] = [
  { name: MenuList.Menu1, submenus: ["LIVE방송", "수익률뽐내기", "감사후기"] },
  {
    name: MenuList.Menu2,
    submenus: ["카카오톡리딩", "카톡무료체험", "추천주수익률"],
  },
  { name: MenuList.Menu3, submenus: [""] },
  {
    name: MenuList.Menu4,
    submenus: ["투자전략", "오늘의리포트", "모멘텀이슈"],
  },
  { name: MenuList.Menu5, submenus: ["공지사항", "이벤트"] },
  {
    name: MenuList.Menu6,
    submenus: ["X1신규가이드", "WHY?X1", "신규가입혜택", "멘토찾기"],
  },
  { name: MenuList.Menu7, submenus: ["로보스탁", "로보퀀트"] },
];
