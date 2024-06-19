"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LeftSide from "./FilterModal/LeftSide/LeftSide";

const FilterModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} className="sm:max-w-[8%]">
        Add Filter
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="modal-top-left"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <LeftSide />
              </ModalBody>
              <ModalFooter className="w-full h-[20%] border border-gray-200">
                <Button variant="bordered" onPress={onClose}>
                  Rest to Default
                </Button>
                <Button color="primary" onPress={onClose}>
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
