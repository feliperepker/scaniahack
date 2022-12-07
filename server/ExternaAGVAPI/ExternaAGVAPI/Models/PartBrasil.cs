using System.ComponentModel.DataAnnotations;

namespace FindMyPart.Models
{
    public class PartBrasil
    {
        [Key]
        [Required]
        public string PartNumber { get; set; }
        [Required]
        public string Name{ get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public int Quantidade { get; set; }
    }
}
