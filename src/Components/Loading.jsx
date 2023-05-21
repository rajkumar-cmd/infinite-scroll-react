import { SkeletonCircle } from "@chakra-ui/react";
import style from "./Style/Loading.module.css"

const Loading = () => {
  return (
    <div className={style.main}>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
        <div className={style.loading}>
            <div className={style.text}></div>
            <SkeletonCircle size="10" />
        </div>
    </div>
  );
};

export default Loading;
