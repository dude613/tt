import { API } from "@/constants";
import { REAVALIDAION_TIME } from "./contants";
import prisma from "@/lib/prisma";
import { unstable_cache as cache } from "next/cache";
import { SCHOOL } from "@/types/COMMON";

export const getSchool = async (id: string) :Promise<SCHOOL|any>=> {
  return await cache(
    async () => {
      try {
        const school = await prisma.school.findUnique({
          where: { id: String(id) },

          include: {
            createdBy: true,
            lastModifiedBy: true,
            heads: true,
            organization: true,
          },
        });

        return school;
      } catch (error: any) {
        return { error: "Faled to fetch School data" };
      }
    },
    REAVALIDAION_TIME.SCHOOL.TAGS(id),
    {
      revalidate: 400,
      tags: REAVALIDAION_TIME.SCHOOL.TAGS(id),
    }
  )();
};
