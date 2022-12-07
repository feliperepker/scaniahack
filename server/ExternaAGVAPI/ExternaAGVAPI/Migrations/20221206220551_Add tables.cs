using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FindMyPart.Migrations
{
    public partial class Addtables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "tb_monasuecia");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "tb_monasuecia");

            migrationBuilder.AddColumn<int>(
                name: "Quantidade",
                table: "tb_monasuecia",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Quantidade",
                table: "tb_monabrazil",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantidade",
                table: "tb_monasuecia");

            migrationBuilder.DropColumn(
                name: "Quantidade",
                table: "tb_monabrazil");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "tb_monasuecia",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "tb_monasuecia",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
