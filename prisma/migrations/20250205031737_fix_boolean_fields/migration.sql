-- CreateTable
CREATE TABLE "ShipmentOrders" (
    "Id" BIGSERIAL NOT NULL,
    "FirstName" VARCHAR(200) NOT NULL,
    "LastName" VARCHAR(200) NOT NULL,
    "Email" VARCHAR(500),
    "Phone" VARCHAR(10),
    "HouseId" BIGINT,
    "BirthDate" TIMESTAMP(3),
    "DocumentType" VARCHAR(5),
    "DocumentId" VARCHAR(20),
    "SexId" BIGINT NOT NULL,
    "ServicesId" BIGINT NOT NULL,
    "Sidewalk" VARCHAR(200) NOT NULL,
    "Need" VARCHAR(200),
    "ModifyUserId" BIGINT NOT NULL,
    "EconomicActivity" BIGINT,
    "ServiceActivityId" BIGINT,

    CONSTRAINT "ShipmentOrders_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Users" (
    "Id" BIGSERIAL NOT NULL,
    "FirstName" VARCHAR(200) NOT NULL,
    "LastName" VARCHAR(200) NOT NULL,
    "Email" VARCHAR(500) NOT NULL,
    "Phone" VARCHAR(10),
    "DocumentType" VARCHAR(20),
    "DocumentId" VARCHAR(20),
    "Active" BOOLEAN NOT NULL DEFAULT true,
    "PasswordHash" VARCHAR(2000) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "NaturalHose" (
    "Id" BIGSERIAL NOT NULL,
    "TitleNaturalHose" VARCHAR(200) NOT NULL,
    "ServicesId" BIGINT NOT NULL,

    CONSTRAINT "NaturalHose_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Send" (
    "Id" BIGSERIAL NOT NULL,
    "UserId" BIGINT,
    "DateSend" TIMESTAMP(3),
    "CountMesage" BIGINT,

    CONSTRAINT "Send_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Services" (
    "Id" BIGSERIAL NOT NULL,
    "TitleNameServices" VARCHAR(200) NOT NULL,
    "UserId" BIGINT NOT NULL,
    "Type" VARCHAR(3),

    CONSTRAINT "Services_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Sex" (
    "Id" BIGSERIAL NOT NULL,
    "TitleNaturalHose" VARCHAR(200) NOT NULL,
    "tipeSex" BOOLEAN NOT NULL,

    CONSTRAINT "Sex_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IX_ShipmentOrders_Id" ON "ShipmentOrders"("Id");

-- CreateIndex
CREATE INDEX "IX_ShipmentOrders_ModifyUserId" ON "ShipmentOrders"("ModifyUserId");

-- CreateIndex
CREATE INDEX "IX_House_ShipmentOrders" ON "ShipmentOrders"("HouseId");

-- CreateIndex
CREATE INDEX "IX_Services_ShipmentOrders" ON "ShipmentOrders"("ServicesId");

-- CreateIndex
CREATE INDEX "IX_Sex_ShipmentOrders" ON "ShipmentOrders"("SexId");

-- CreateIndex
CREATE INDEX "IX_EconomicActivity_ShipmentOrders" ON "ShipmentOrders"("EconomicActivity");

-- CreateIndex
CREATE INDEX "IX_ServiceActivity_ShipmentOrders" ON "ShipmentOrders"("ServiceActivityId");

-- CreateIndex
CREATE UNIQUE INDEX "IX_Users_Id" ON "Users"("Id");

-- CreateIndex
CREATE INDEX "IX_Services_NaturalHose" ON "NaturalHose"("ServicesId");

-- CreateIndex
CREATE INDEX "IX_User_Services" ON "Services"("UserId");

-- AddForeignKey
ALTER TABLE "ShipmentOrders" ADD CONSTRAINT "FK_House_ShipmentOrders" FOREIGN KEY ("HouseId") REFERENCES "NaturalHose"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ShipmentOrders" ADD CONSTRAINT "FK_Services_ShipmentOrders" FOREIGN KEY ("ServicesId") REFERENCES "Services"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ShipmentOrders" ADD CONSTRAINT "FK_EconomicActivity_ShipmentOrders" FOREIGN KEY ("EconomicActivity") REFERENCES "NaturalHose"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ShipmentOrders" ADD CONSTRAINT "FK_ServiceActivity_ShipmentOrders" FOREIGN KEY ("ServiceActivityId") REFERENCES "Services"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ShipmentOrders" ADD CONSTRAINT "FK_Sex_ShipmentOrders" FOREIGN KEY ("SexId") REFERENCES "Sex"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ShipmentOrders" ADD CONSTRAINT "FK_User_ShipmentOrders" FOREIGN KEY ("ModifyUserId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "NaturalHose" ADD CONSTRAINT "FK_Services_NaturalHose" FOREIGN KEY ("ServicesId") REFERENCES "Services"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "FK_User_Services" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE NO ACTION;
