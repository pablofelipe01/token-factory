import React from "react";
import { Checkbox, VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import * as yup from "yup";

export interface IDisclosures {
  notASecurity: boolean;
}

export const disclosuresSchema = yup.object({
  notASecurity: yup.boolean().required().isTrue(),
});

export const Disclosures = ({ fees }: { fees: number }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ disclosures: IDisclosures }>();

  return (
    <VStack spacing={2} w="full" align="left">
      <Checkbox
        isInvalid={!!errors.disclosures?.notASecurity}
        {...register("disclosures.notASecurity")}
      >
        Any disclosures...
      </Checkbox>
    </VStack>
  );
};