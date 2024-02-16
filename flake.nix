{
  description = "Personal Website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system: 
      let
        pkgs = nixpkgs.legacyPackages.${system};
        zsh = pkgs.zsh;
        bun = pkgs.bun;
        tailwindcss = pkgs.tailwindcss;
        flyctl = pkgs.flyctl;
      in

      {
        devShell = pkgs.mkShell {
          buildInputs = [ bun tailwindcss flyctl zsh ];
          SHELL = "${pkgs.zsh}/bin/zsh";
          shellHook = ''
            if [ -z "$IN_NIX_SHELL_ZSH_STARTED" ]; then
              export IN_NIX_SHELL_ZSH_STARTED=1
              exec $SHELL
            fi
          '';
        };
      }
    );
}

