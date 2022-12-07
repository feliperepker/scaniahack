using System.ComponentModel.DataAnnotations;

namespace FindMyPart.Models
{
    public class PartHolanda
    {
        [Key]
        [Required]
        public string PartNumber { get; set; }
        [Required]
        public int Quantidade { get; set; }
    }
}
