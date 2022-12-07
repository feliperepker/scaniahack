using ExternaAGVAPI.Data;
using ExternaAGVAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace UsuariosApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly FindMyPartsContext _context;

        public LoginController(FindMyPartsContext context)
        {
            this._context = context;
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult Authenticate([FromBody] Login userParam)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    Users user = _context.tb_users.FirstOrDefault(a => a.Username == userParam.Username && a.Password == userParam.Password);
                    if (user != null)
                    {
                        Claim[] direitosUsuario = new Claim[]
                        {
                            new Claim("username", user.Username),
                            new Claim(ClaimTypes.Role, user.Role),
                        };

                        var chave = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes("0asdjas09djsa09djasdjsadajsd09asjd09sajcnzxn")
                            );
                        var credenciais = new SigningCredentials(chave, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(
                            claims: direitosUsuario,
                            signingCredentials: credenciais,
                            expires: DateTime.UtcNow.AddHours(1)
                            );

                        var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                        return Ok(tokenString);
                    }
                }
                catch (Exception)
                {
                    return Unauthorized(); //401

                }
                return Unauthorized(); //401
            }
            return BadRequest(); //400
        }

    }
}
