import { Icon_0, Icon_1, Icon_2, Icon_3, Icon_4, Icon_5, Icon_6, Icon_7, Icon_8, Icon_9 } from '@/assets/icons';

const getIconArray = (style: string): JSX.Element[] => {
  const iconArray = [<Icon_0 className={style}></Icon_0>,
  <Icon_1 className={style}></Icon_1>,
  <Icon_2 className={style}></Icon_2>,
  <Icon_3 className={style}></Icon_3>,
  <Icon_4 className={style}></Icon_4>,
  <Icon_5 className={style}></Icon_5>,
  <Icon_6 className={style}></Icon_6>,
  <Icon_7 className={style}></Icon_7>,
  <Icon_8 className={style}></Icon_8>,
  <Icon_9 className={style}></Icon_9>,
  <div></div>]
  return iconArray;
}

export default getIconArray;