-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "numberClient" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "additionalAddress" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("numberClient")
);

-- CreateTable
CREATE TABLE "AccountData" (
    "id" SERIAL NOT NULL,
    "numberClient" BIGINT NOT NULL,
    "referenceMonth" TEXT NOT NULL,
    "electricalEnergyQuantity" INTEGER NOT NULL,
    "electricalEnergyValue" DOUBLE PRECISION NOT NULL,
    "energySCEEEWithoutICMSQuantity" INTEGER NOT NULL,
    "energySCEEEWithoutICMSValue" DOUBLE PRECISION NOT NULL,
    "compensatedEnergyGDQuantity" INTEGER NOT NULL,
    "compensatedEnergyGDValue" DOUBLE PRECISION NOT NULL,
    "contribMunicipalPublicLightValue" DOUBLE PRECISION NOT NULL,
    "urlAccount" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccountData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "AccountData" ADD CONSTRAINT "AccountData_numberClient_fkey" FOREIGN KEY ("numberClient") REFERENCES "Client"("numberClient") ON DELETE RESTRICT ON UPDATE CASCADE;
