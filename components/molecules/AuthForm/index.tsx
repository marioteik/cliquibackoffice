"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {phoneLogin, phoneSignUp, resendOtp, verifyOtp} from "@/services/auth";
import ReactCountryFlag from "react-country-flag";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";
import { CodeInput } from "@/components/atoms/CodeInput";
import { Icons } from "@/components/atoms/Icons";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { useToast } from "@/components/atoms/Toast/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface LoginProps {
  phone: string;
  code?: string;
}

export function AuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [askForCode, setAskForCode] = React.useState<boolean>(false);
  const [seconds, setSeconds] = React.useState<number>(60);

  const { push } = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginProps>();

  const code = watch("code");
  const phone = watch("phone");

  async function onSubmit(data: LoginProps) {
    setIsLoading(true);

    const response = await phoneSignUp("+55" + data.phone);

    setIsLoading(false);

    if (!response.ok) {
      toast({
        title: "Erro ao gerar o código de veriticação",
        description: "Verifique se o número está correto e tente novamente",
        variant: "destructive",
      });
      return;
    }

    setSeconds(60);
    setAskForCode(true);
  }

  async function handleCodeResend() {
    const response = await resendOtp("+55" + watch("phone"));
    if (!response.ok) {
      toast({
        title: "Erro ao gerar o código de veriticação",
        description: "Verifique se o número está correto e tente novamente",
        variant: "destructive",
      });
      setSeconds(0);

      return;
    }
    setSeconds(60);

    toast({
      title: "Código reenviado",
    });
  }

  const handleCodeSubmit = React.useCallback(async () => {
    setIsLoading(true);

    const response = await verifyOtp("+55" + watch("phone"), code!);

    setIsLoading(false);

    if (!response.ok) {
      toast({
        title: "Erro ao confirmar o código",
        description: "Verifique se o número está correto e tente novamente.",
        variant: "destructive",
      });

      return;
    }

    push("/");
  }, [code, push, toast, watch]);

  function goBack() {
    setAskForCode(false);
  }

  React.useEffect(() => {
    (async () => {
      if (code?.length === 6) {
        await handleCodeSubmit();
      }
    })();
  }, [code, handleCodeSubmit]);

  React.useEffect(() => {
    askForCode &&
      seconds > 0 &&
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
  }, [askForCode, seconds]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {askForCode && (
        <div>
          <div className="mb-6" onClick={goBack}>
            <Icons.chevronLeft className="mr-2 h-6 w-6 text-primary cursor-pointer" />
          </div>

          <div className="text-center w-full mb-6 text-md">
            Digite o código de 6 dígitos que enviamos para o número
            <span className="font-semibold"> +55 {watch("phone")}</span>
          </div>

          <CodeInput {...register("code")} />

          <Button
            variant="default"
            className="mt-6 w-full"
            type="button"
            disabled={isLoading}
            onClick={handleCodeSubmit}
          >
            {isLoading ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />{" "}
              </>
            ) : (
              <></>
            )}
            Confirmar
          </Button>

          <Button
            variant="link"
            className="mt-2 w-full"
            type="button"
            disabled={seconds > 0}
            onClick={handleCodeResend}
          >
            Reenviar código {seconds > 0 && `(${seconds})`}
          </Button>
        </div>
      )}
      {!askForCode && (
        <>
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar uma conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Entre com seu celular para criar uma conta
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Label className="sr-only" htmlFor="phone">
                  Celular
                </Label>

                <div className="flex gap-2 justify-stretch">
                  <div className="h-10 w-20 bg-gray-100 rounded-md flex justify-center items-center">
                    <ReactCountryFlag
                      countryCode="BR"
                      svg
                      className="h-5 w-5 mr-1"
                    />
                    <span className="text-sm font-semibold">+55</span>
                  </div>

                  <Input
                    id="phone"
                    placeholder="99 99999-9999"
                    type="phone"
                    autoCapitalize="none"
                    autoComplete="phone"
                    autoCorrect="off"
                    disabled={isLoading}
                    autoFocus={!!phone}
                    {...register("phone", {
                      required: "Campo obrigatório",
                    })}
                  />
                </div>
              </div>
              <Button disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Entrar com o celular
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.google className="mr-2 h-4 w-4" />
              )}{" "}
              Google
            </Button>
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.apple className="mr-2 h-4 w-4" />
              )}{" "}
              Apple
            </Button>
          </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao criar uma conta você concorda com nosso{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Políticas de Privacidade
            </Link>
            .
          </p>
        </>
      )}
    </div>
  );
}
