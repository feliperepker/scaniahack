using System.ComponentModel.DataAnnotations;

namespace FindMyPart.Models
{
    public class PartSuecia
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Peca { get; set; }
        [Required]
        public string Long_Desc_Central{ get; set; }
        [Required]
        public int Total_Balance { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string Place { get; set; }
        
    }
}
