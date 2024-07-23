import { FC } from "react";

import { ModalWrapper } from "@/app/(app)/_components/modal-wrapper";

import { IModalData } from "@/app/(pages)/(home)/_const/lists";
import { Title } from "@/app/_shared/ui/typography/title";

import styles from './ListItemModal.module.scss';

interface IModalContentProps extends IModalData {
  isOpen: boolean;
  onClose: () => void;
}

export const ListItemModal: FC<IModalContentProps> = ({ isOpen, onClose, mediaPath, title, description }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={styles.modal_content}>
        <video src={mediaPath} autoPlay playsInline loop muted />
        <Title size='L' className={styles.text} title={title} text={description} />
      </div>
    </ModalWrapper>
  )
}
