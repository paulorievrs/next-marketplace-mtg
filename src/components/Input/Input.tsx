import clsx from 'clsx'
import { useState } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import Body from '../Body/Body'

type InputProps<T extends FieldValues> = {
  name: Path<T>
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  error?: string
  register: UseFormRegister<T> | (() => void)
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input<T extends FieldValues>({
  name,
  error,
  type = 'text',
  register,
  ...props
}: InputProps<T>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const Icon = isPasswordVisible ? BsEyeFill : BsEyeSlashFill

  return (
    <div className="flex flex-col gap-1">
      <label className="text-primary" htmlFor={name}>
        {props.placeholder || name}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          {...register(name)}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          placeholder={props.placeholder || name}
          {...props}
          className={clsx(
            'pl-1 text-primary h-10 border rounded outline-0 focus:outline-none w-full',
            error ? 'border-red' : 'border-primary',
            props.className
          )}
        />
        {type === 'password' && (
          <Icon
            onClick={() =>
              setIsPasswordVisible((currentValue) => !currentValue)
            }
            className="absolute right-5 translate-x-1/2 top-1/2 transform -translate-y-1/2"
            size={22}
            fill={'#2a2d46'}
          />
        )}
      </div>
      {error && (
        <Body color="text-red" fontSize="text-xs">
          {error}
        </Body>
      )}
    </div>
  )
}
