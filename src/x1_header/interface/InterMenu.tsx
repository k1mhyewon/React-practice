import { MenuList } from "../enum/EnumMenuList";

export type Menu = {
  name: string;
  submenus: string[];
};

export const MenuData: Menu[] = [
  { name: "전문가방송", submenus: ["LIVE방송", "수익률뽐내기", "감사후기"] },
  {
    name: "카톡,문자",
    submenus: ["카카오톡리딩", "카톡무료체험", "추천주수익률"],
  },
  { name: "아카데미", submenus: [] },
  {
    name: "투자전략",
    submenus: ["투자전략", "오늘의리포트", "모멘텀이슈"],
  },
  { name: "공지사항", submenus: ["공지사항", "이벤트"] },
  {
    name: "X1신규가이드",
    submenus: ["X1신규가이드", "WHY?X1", "신규가입혜택", "멘토찾기"],
  },
  { name: "로보스탁", submenus: ["로보스탁", "로보퀀트"] },
];
